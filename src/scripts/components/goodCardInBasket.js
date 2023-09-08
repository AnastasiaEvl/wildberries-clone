import { SELECTORS } from '../constants'
import {
  handlerCurrencyName,
  handlerCurrencyProfile,
  handleChangeGoodQuantityInBasket
} from '../handlers'
import { getFromLocalStorage } from '../utils'
import { createDivBlock } from './div'
import { createBtn } from './button'

export function createGoodCardInBasket ({ image, title, price, id }) {
  const container = document.querySelector(SELECTORS.modalContent)
  const containerForLeft = createDivBlock(`${id}`, '', 'basket__cards-container')
  const goodPrices = document.createElement('p')
  goodPrices.textContent = `${price * handlerCurrencyProfile()}`
  goodPrices.className = 'basket__const-price'
  goodPrices.setAttribute('id', 'prices')
  const imgGoodsContainer = createDivBlock('', '', 'basket__img-card')
  const cardImg = document.createElement('img')
  cardImg.setAttribute('src', image)
  cardImg.className = 'basket__img-good'
  const cardName = document.createElement('p')
  cardName.textContent = title
  imgGoodsContainer.append(cardImg)
  const goodDescription = createDivBlock('', '', '')
  const goodsPrice = document.createElement('p')
  goodsPrice.className = 'basket__price-good'
  goodsPrice.setAttribute('id', 'price')
  const goodsPriceCurrency = document.createElement('p')
  goodsPriceCurrency.textContent = handlerCurrencyName()
  goodsPriceCurrency.className = 'basket__currency-good'
  const containerBtnQuantity = createDivBlock(`${id}`, '', 'basket__btn-counter-container')
  const btnPlus = createBtn(`${id}`, '+', 'plus')
  const btnMinus = createBtn(`${id}`, '-', 'minus')
  const quantity = document.createElement('p')
  getFromLocalStorage('basket').reduce((acc, elem) => {
    if (elem.id === id) {
      quantity.textContent = `${elem.quantity}`
      return quantity.textContent
    }
    return quantity.textContent
  }, [])
  goodsPrice.textContent = `${(price * handlerCurrencyProfile() * Number(quantity.textContent)).toFixed(2)}`
  quantity.setAttribute('id', 'basket__good-quantity')
  quantity.className = 'basket__good-quantity'
  const basketFinalPrice = document.querySelector(SELECTORS.basketSum)
  let amount = Number(basketFinalPrice.textContent)
  amount += Number(goodsPrice.textContent)
  basketFinalPrice.textContent = amount.toFixed(2)
  containerBtnQuantity.append(btnMinus, quantity, btnPlus)
  containerBtnQuantity.addEventListener('click', handleChangeGoodQuantityInBasket)
  const goodPrice = document.createElement('div')
  goodPrice.append(goodsPrice, goodsPriceCurrency)
  goodDescription.append(cardName, containerBtnQuantity)
  containerForLeft.append(imgGoodsContainer, goodDescription, goodPrice, goodPrices)
  container.append(containerForLeft)
  return container
}
