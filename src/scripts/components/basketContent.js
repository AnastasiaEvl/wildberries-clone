import { SELECTORS } from '../constants'
import { createBtn } from './button'
import { handlerCurrencyName, handlePay, getNoun } from '../handlers'
import { getFromLocalStorage } from '../utils'
import { createDivBlock } from './div'

export function createBasketContent () {
  const container = document.querySelector(SELECTORS.modalContent)
  container.textContent = ''
  const underContainer = createDivBlock('', '', 'basket__header')
  const basketContent = createDivBlock('container-basket', '', 'basket')
  const titleCard = document.createElement('h2')
  titleCard.className = 'basket__title'
  titleCard.textContent = 'Корзина'
  const basketTitleContainer = createDivBlock('', '', '')
  const goodsQuantity = document.createElement('p')
  goodsQuantity.className = 'basket__quantity'
  goodsQuantity.setAttribute('id', 'basket__quantity')
  let goodsName = ''
  const dataLocalStorage = getFromLocalStorage('basket')
  const totalQuantity = dataLocalStorage.reduce((accumulator, currentValue) => accumulator + Number(currentValue.quantity), 0)
  goodsName = getNoun(totalQuantity, 'товар', 'товаров', 'товара')
  goodsQuantity.textContent = `${totalQuantity}`
  const nameTotalQuantity = document.createElement('span')
  nameTotalQuantity.textContent = `${goodsName}`
  nameTotalQuantity.setAttribute('id', 'basket__total-qty')
  nameTotalQuantity.className = 'basket__name-qty'
  basketTitleContainer.append(titleCard, goodsQuantity, nameTotalQuantity)
  const containerForRight = createDivBlock('', '', 'basket__for-pay')
  const needToPayTittle = document.createElement('span')
  needToPayTittle.textContent = 'ИТОГО'
  needToPayTittle.className = 'basket__title-final-sum'
  const needToPay = document.createElement('span')
  needToPay.textContent = '0'
  needToPay.setAttribute('id', 'basket__sum')
  needToPay.classList.add('basket__sum')
  const currency = document.createElement('span')
  currency.textContent = handlerCurrencyName()
  currency.className = 'basket__currency-sum'
  const payBtn = createBtn('pay-btn', 'Оплатить', 'btn__basket')
  payBtn.classList.add('sum')
  payBtn.addEventListener('click', handlePay)
  containerForRight.append(needToPayTittle, needToPay, currency, payBtn)
  basketContent.append(containerForRight)
  underContainer.append(basketTitleContainer, basketContent)
  container.append(underContainer)
  return container
}
