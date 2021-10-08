const axios = require('axios')
const { Router } = require('express')
const { getRandomSet, getRandomNumber, derange, makeRandomId } = require('./util')

const router = Router()
const base = 'https://cataas.com'

const extract = ({data}) => data
const getAssetData = (id) => axios.get(`${base}/cat/${id}?json=true`).then(extract)
const getAllMatching = (tag) => axios.get(`${base}/api/cats?tags=${tag}`).then(extract)

const getRandomTargetTag = () => 'computer'
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

function prepareValidationPayload({targets, salt}) {
  const targetImages = targets.map(parseCaas)
  const saltImages = salt.map(parseCaas)

  const validationId = makeRandomId(12)
  const correctIds = targetImages.map(({ id }) => id)
  validationPackets[validationId] = correctIds

  return { validationId, assets: derange([...targetImages, ...saltImages]) }
}

router.get('/validation-set', async (req, res) => {
  const targetTag = getRandomTargetTag()
  const saltTag = getRandomSaltTag()

  const targets = await getAllMatching(targetTag)
  const salt = filter(await getAllMatching(saltTag), targetTag)
  const targetCount = getRandomNumber(3, Math.min(targets.length, 6))
  const saltCount = 9 - targetCount

  const validationPayload = prepareValidationPayload({
    targets: getRandomSet(targets, targetCount),
    salt: getRandomSet(salt, saltCount)
  })

  res.json(validationPayload)
})

module.exports = router
