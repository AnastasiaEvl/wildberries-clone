import { SELECTORS, URL } from '../constants'
import { createGoodCardInBasket, createBasketContent } from '../components'
import { getFromLocalStorage, setToLocalStorage } from '../utils'

export function handleShowBasketContent () {
  if (localStorage.length === 0) {
    setToLocalStorage('basket', [])
  }
  createBasketContent()
  const basketGoods = getFromLocalStorage('basket')
  const data = fetch(URL)
  data.then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Error found')
    }
  })
    .then((data) => data.forEach((item) => {
      if (basketGoods.find(good => good.id === item.id)) {
        createGoodCardInBasket(item)
      }
    })).catch((error) => console.error(error))
  const modal = document.querySelector(SELECTORS.dialog)
  modal.showModal()
}
