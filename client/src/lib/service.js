// @ts-nocheck
import * as axios from 'axios'
import { validationSet } from './stores'

export async function getValidationSet() {
  const { data } = await axios.get('/api/cats/validation-set')
  validationSet.set(data)
}

export async function verifySelectedImages(selected, validationId) {
  const result = await axios.post(`/api/cats/validate/${validationId}`, {
    answer: Object.keys(selected),
  })
  return result.data
}
