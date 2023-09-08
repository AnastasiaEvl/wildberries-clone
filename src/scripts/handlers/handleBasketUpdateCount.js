import { getFromLocalStorage } from '../utils'

export function handleBasketUpdateCount () {
  const basket = getFromLocalStorage('basket')
  const countElement = document.querySelector('#cart-num')
  countElement.innerHTML = basket.reduce((acc, good) => acc + parseInt(good.quantity), 0)
}
