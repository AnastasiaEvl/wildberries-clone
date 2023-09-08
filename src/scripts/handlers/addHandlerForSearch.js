import { SELECTORS, URL } from '../constants'
import { handleShowSearchResult } from './handleShowSearchResult'

export function addHandlerForSearch () {
  const searchInput = document.querySelector(SELECTORS.searchInput)

  const items = []

  fetch(URL)
    .then((res) => {
      if (res.ok) return res.json()
    })
    .then((reqItems) => items.push(...reqItems))

  searchInput.addEventListener('keyup', (event) => {
    handleShowSearchResult(items, event)
  })
}
