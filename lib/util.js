function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement (array) {
  return array[getRandomNumber(0, array.length)]
}

function getRandomSet (array, count) {
  const set = []
  if (count >= array.length) return [...array]
  while (set.length < count) {
    const item = getRandomElement(array);
    if (!set.includes(item)) {
      set.push(item)
    }
  }
  return set
}

function derange (array) {
  const original = [...array]
  const derangement = []
  for (let i = 0; i < array.length; ++i) {
    const item = getRandomElement(original)
    derangement.push(item)
    original.splice(original.findIndex(elem => item === elem), 1)
  }
  return derangement
}

function makeRandomId(saltLength = 8) {
  let result           = '' + Date.now();
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < saltLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  getRandomNumber,
  getRandomElement,
  getRandomSet,
  derange,
  makeRandomId,
}
