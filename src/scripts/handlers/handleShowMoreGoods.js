import { SELECTORS } from '../constants'
import { getPage, addGoodsForShow } from '../modules'

export function handleShowMoreGoods () {
  let page = 0

  getPage(page++).then(({ items }) => addGoodsForShow(items))

  const showMoreButton = document.querySelector(SELECTORS.showMoreBtn)

  showMoreButton.addEventListener('click', async () => {
    showMoreButton.disabled = true
    const { items, pages } = await getPage(page++)
    addGoodsForShow(items)

    if (page >= pages) {
      showMoreButton.style.display = 'none'
      return
    }

    showMoreButton.disabled = false
  })
}
