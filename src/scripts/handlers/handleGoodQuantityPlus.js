import { SELECTORS } from '../constants'
import { setToLocalStorage, getFromLocalStorage } from '../utils'
import { getNoun } from './getNounNameInBasket'
import { handleBasketUpdateCount } from './handleBasketUpdateCount'

export function handleGoodQuantityPlus (element) {
  const numberContainer = element.previousElementSibling
  numberContainer.textContent++
  const amount = document.querySelector('#basket__quantity')
  const goodQuantity = numberContainer.textContent
  const goodId = element.parentElement.id
  const newQuantity = getFromLocalStorage('basket').reduce((acc, elem) => {
    if (elem.id === goodId) {
      elem.quantity = goodQuantity
      return [...acc, { ...elem }]
    }
    return [...acc, elem]
  }, [])
  setToLocalStorage('basket', newQuantity)
  handleBasketUpdateCount()
  const dataLocalStorage = getFromLocalStorage('basket')
  const newTotalQuantity = dataLocalStorage.reduce((accumulator, currentValue) => accumulator +
      Number(currentValue.quantity), 0)
  amount.textContent = ''
  amount.textContent = `${newTotalQuantity}`
  const totalName = document.querySelector('#basket__total-qty')
  totalName.textContent = getNoun(Number(newTotalQuantity), 'товар', 'товаров', 'товара')
  const parentElement = numberContainer.parentNode
  const previousElement = parentElement.parentNode
  const goodPriceContainer = previousElement.nextElementSibling
  const price = goodPriceContainer.nextElementSibling.textContent
  const sum = numberContainer.textContent * price
  goodPriceContainer.firstChild.textContent = ''
  goodPriceContainer.firstChild.textContent = sum.toFixed(2)
  const totalPrice = document.querySelector(SELECTORS.basketSum)
  let inner = Number(totalPrice.textContent)
  totalPrice.textContent = ''
  inner += Number(price)
  totalPrice.innerHTML = inner.toFixed(2)
}
