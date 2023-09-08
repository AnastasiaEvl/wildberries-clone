import { getFromLocalStorage, setToLocalStorage } from '../utils'

export function courses () {
  let rate = null
  const courses = [{ name: 'by', course: '1', alphabeticName: 'бел.руб.' }]
  setToLocalStorage('rate', courses)
  fetch('https://api.nbrb.by/exrates/rates/456')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      rate = JSON.stringify(data.Cur_OfficialRate * 10)
      const ruRate = { name: 'ru', course: `${rate}`, alphabeticName: 'рос.руб.' }
      const itemsRate = getFromLocalStorage('rate')
      itemsRate.push(ruRate)
      setToLocalStorage('rate', itemsRate)
    })
  fetch('https://api.nbrb.by/exrates/rates/431')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      rate = JSON.stringify(data.Cur_OfficialRate / 10)
      const usdRate = { name: 'usd', course: `${rate}`, alphabeticName: 'USD' }
      const localStorageItem = getFromLocalStorage('rate')
      localStorageItem.push(usdRate)
      setToLocalStorage('rate', localStorageItem)
    })
}
