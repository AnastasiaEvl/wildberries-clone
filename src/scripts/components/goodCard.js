import { SELECTORS } from '../constants'
import { handleCreateNewModal, handleAddToBasket, handlerCurrencyProfile, handlerCurrencyName } from '../handlers'
import { createBtn } from './button'
import { getFromLocalStorage } from '../utils'

export function createGoodCard ({ title, price, image, id }) {
  const container = document.querySelector(SELECTORS.goodsCardContent)
  const cardsContainer = document.createElement('article')
  cardsContainer.setAttribute('id', `${id}`)
  cardsContainer.className = 'card'
  const titleCard = document.createElement('h2')
  titleCard.textContent = `${title}`
  titleCard.className = 'card__title'
  cardsContainer.addEventListener('click', handleCreateNewModal)
  const goodsImg = document.createElement('img')
  goodsImg.setAttribute('src', image)
  goodsImg.className = 'card__img'
  const prices = document.createElement('p')
  prices.textContent = `${(price * handlerCurrencyProfile()).toFixed(2)} ${handlerCurrencyName()}`
  prices.className = 'card__prices'

  const inBasket = getFromLocalStorage('basket').find(item => item.id === `${id}`)
  const btnBasket = createBtn(
    `${id}`,
    inBasket ? 'В корзине' : 'В корзину',
    'btn__basket' + (inBasket ? ' inactive' : '')
  )

  btnBasket.addEventListener('click', handleAddToBasket)
  cardsContainer.append(goodsImg, prices, titleCard, btnBasket)
  container.append(cardsContainer)
  return container
}
