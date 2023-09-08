import { handleShowBasketContent } from './handleShowBasketContent'
import { SELECTORS } from '../constants'

export function addHandlerForBasket () {
  const basket = document.querySelector(SELECTORS.basketIcon)
  basket.addEventListener('click', handleShowBasketContent)
}
