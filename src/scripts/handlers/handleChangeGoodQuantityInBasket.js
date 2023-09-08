import { handleGoodQuantityPlus } from './handleGoodQuantityPlus'
import { handleGoodQuantityMinus } from './handleGoodQuantityMinus'
import { SELECTORS } from '../constants'

export function handleChangeGoodQuantityInBasket (event) {
  if (event.target.classList.contains(SELECTORS.plusBasketBtn)) {
    handleGoodQuantityPlus(event.target)
  }
  if (event.target.classList.contains(SELECTORS.minusBasketBtn)) {
    handleGoodQuantityMinus(event.target)
  }
}
