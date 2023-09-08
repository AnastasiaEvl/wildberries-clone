import { SELECTORS } from '../constants'
import { getFromLocalStorage, setToLocalStorage, makeGoodCartActive } from '../utils'
import { handleBasketUpdateCount } from './handleBasketUpdateCount'
import { handleCloseNewModal } from './handleCloseNewModal'
import { getNoun } from './getNounNameInBasket'

export function handleGoodQuantityMinus (element) {
  const numberContainer = element.nextElementSibling
  const amount = document.querySelector('#basket__quantity')
  if (numberContainer.textContent <= '1') {
    const question = confirm('Удалить товар из корзины?')
    if (question) {
      handleCloseNewModal()
      const elem = element.id
      const parse = getFromLocalStorage('basket')
      const index = parse.findIndex(n => n.id === elem)
      parse.splice(index, 1)
      localStorage.setItem('basket', JSON.stringify(parse))
      makeGoodCartActive(elem)
      handleBasketUpdateCount()
    }
  } else if (numberContainer.textContent > '1') {
    numberContainer.textContent--
    const goodPrice = numberContainer.textContent
    const goodId = element.parentElement.id
    const newQuantity = getFromLocalStorage('basket').reduce((acc, elem) => {
      if (elem.id === goodId) {
        elem.quantity = goodPrice
        return [...acc, { ...elem }]
      }
      return [...acc, elem]
    }, [])
    setToLocalStorage('basket', newQuantity)
    handleBasketUpdateCount()
    const parentElement = numberContainer.parentNode
    const previousElement = parentElement.parentNode
    const dataLocalStorage = getFromLocalStorage('basket')
    const newTotalQuantity = dataLocalStorage.reduce((accumulator, currentValue) => accumulator +
        Number(currentValue.quantity), 0)
    amount.textContent = ''
    amount.textContent = `${newTotalQuantity}`
    const totalName = document.querySelector('#basket__total-qty')
    totalName.textContent = getNoun(Number(newTotalQuantity), 'товар', 'товаров', 'товара')
    const goodPriceContainer = previousElement.nextElementSibling
    const price = goodPriceContainer.nextElementSibling.textContent
    const sum = numberContainer.textContent * price
    goodPriceContainer.firstChild.textContent = ''
    goodPriceContainer.firstChild.textContent = sum.toFixed(2)
    const totalPrice = document.querySelector(SELECTORS.basketSum)
    let inner = Number(totalPrice.textContent)
    inner -= Number(price)
    totalPrice.innerHTML = inner.toFixed(2)
  }
}
