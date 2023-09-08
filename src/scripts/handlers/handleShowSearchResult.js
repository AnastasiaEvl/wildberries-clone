import { createGoodCard } from '../components'
import { SELECTORS } from '../constants'
import { search } from '../modules'
import { handleShowMoreGoods } from './handleShowMoreGoods'

export function handleShowSearchResult (items, event) {
  const pageTitle = document.querySelector(SELECTORS.goodsTitle)
  const container = document.querySelector(SELECTORS.goodsCardContent)
  const matches = search(items, event.target.value)
  pageTitle.innerHTML = event.target?.value?.length ? 'Результаты поиска:' : 'Хиты продаж:'

  container.innerHTML = ''
  if (event.target.value === '') {
    handleShowMoreGoods()
  } else {
    if (!matches.length) {
      container.innerHTML = 'Ничего не найдено'
    } else {
      matches.forEach((item) => createGoodCard(item))
    }
  }
}
