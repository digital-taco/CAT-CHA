const axios = require('axios')
const { Router } = require('express')
const { getRandomSet, getRandomNumber, derange, makeRandomId, getRandomElement } = require('./util')
const curatedTags = require('./curated-tags.json')

const router = Router()
const base = 'https://cataas.com'

const extract = ({data}) => data
const getAssetData = (id) => axios.get(`${base}/cat/${id}?json=true`).then(extract)
const getAllMatching = (tag) => axios.get(`${base}/api/cats?tags=${tag}`).then(extract)


const getRandomTargetTag = () => getRandomElement(curatedTags)

// it turns out this is the most popular tag and is generic enough we can always use it
// so we don't need to select from a random list of tags in this case
const getRandomSaltTag = () => 'cute'

function filter (list, tag) {
  return list.filter(({tags}) => !tags.includes(tag))
}

function parseCaas({ id }) {
  const uniqueId = makeRandomId()
  return {
    id: uniqueId,
    url: `${base}/cat/${id}`
  }
}

const validationPackets = {}
const kill = (id) => {
  delete validationPackets[id];
  console.log('Killed validation packet', id, validationPackets)
}
const scheduleExpiration = (id) => {
  setTimeout(() => kill(id), 120000)
}

function prepareValidationPayload({ targets, salt, prompt }) {
  const targetImages = targets.map(parseCaas)
  const saltImages = salt.map(parseCaas)

  const validationId = makeRandomId(12)
  const correctIds = targetImages.map(({ id }) => id)
  validationPackets[validationId] = correctIds
  scheduleExpiration(validationId)

  return { validationId, prompt, assets: derange([...targetImages, ...saltImages]) }
}

async function generateValidationPayload() {
  const { tag:targetTag, prompt } = getRandomTargetTag()
  const saltTag = getRandomSaltTag()

  const targets = await getAllMatching(targetTag)
  const salt = filter(await getAllMatching(saltTag), targetTag)
  const targetCount = getRandomNumber(3, Math.min(targets.length, 6))
  const saltCount = 9 - targetCount

  const validationPayload = prepareValidationPayload({
    targets: getRandomSet(targets, targetCount),
    salt: getRandomSet(salt, saltCount),
    prompt
  })

  return validationPayload
}

router.get('/validation-set', async (req, res) => res.json(await generateValidationPayload()))
router.post('/validate/:validationId', async (req, res) => {
  const { validationId } = req.params
  const { answer } = req.body
  
  const correctAnswer = validationPackets[validationId];
  kill(validationId)

  if (!correctAnswer) {
    return res.json({ status: 'EXPIRED', message: "The session has expired, please try again.", retry: await generateValidationPayload() })
  }

  const matches = correctAnswer.length === answer?.length && correctAnswer.every((id) => answer.includes(id))

  if (!matches) {
    return res.json({ status: 'FAILED', message: "Incorrect, please try again.", retry: await generateValidationPayload() })
  }
  return res.json({ status: 'SUCCESS', message: "Correct!" })
})

module.exports = router