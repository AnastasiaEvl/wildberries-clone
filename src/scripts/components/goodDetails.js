import { SELECTORS } from '../constants'
import { createDivBlock } from './div'
import { createBtn } from './button'
import { handlerCurrencyName, handlerCurrencyProfile, handleAddToBasket } from '../handlers'
import { getFromLocalStorage } from '../utils'

export function createGoodDetails ({ title, price, description, id, number }) {
  const container = document.querySelector(SELECTORS.modalContent)
  const cardContainer = createDivBlock('', '', 'good-details')

  const titleCard = document.createElement('h2')
  titleCard.textContent = title
  titleCard.className = 'good-details__title'

  const goodPrice = document.createElement('p')
  goodPrice.textContent = `${(price * handlerCurrencyProfile()).toFixed(2)}  ${handlerCurrencyName()}`
  goodPrice.className = 'good-details__price'

  const inBasket = getFromLocalStorage('basket').find(item => item.id === `${id}`)
  const basketBtn = createBtn(
    `${id}`,
    inBasket ? 'В корзине' : 'В корзину',
    'btn__basket' + (inBasket ? ' inactive' : '')
  )
  basketBtn.classList.add('good-details__btn-basket')
  basketBtn.addEventListener('click', handleAddToBasket)

  const cardNumberTitle = document.createElement('span')
  cardNumberTitle.textContent = 'Артикул: '
  cardNumberTitle.className = 'good-details__subtitle'

  const cardNumberText = document.createElement('span')
  cardNumberText.textContent = `${number}`
  cardNumberText.className = 'good-details__subtext'

  const cardNumber = document.createElement('div')
  cardNumber.className = 'good-details__text'

  cardNumber.append(cardNumberTitle, cardNumberText)

  const cardDescriptionTitle = document.createElement('p')
  cardDescriptionTitle.textContent = 'Описание: '
  cardDescriptionTitle.className = 'good-details__subtitle'

  const cardDescriptionText = document.createElement('p')
  cardDescriptionText.textContent = `${description}`
  cardDescriptionText.className = 'good-details__subtext'

  const cardDescription = document.createElement('div')
  cardDescription.className = 'good-details__text'

  cardDescription.append(cardDescriptionTitle, cardDescriptionText)

  cardContainer.append(titleCard, goodPrice, basketBtn, cardNumber, cardDescription)
  container.append(cardContainer)
  return container
}
