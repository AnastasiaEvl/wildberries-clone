import { createGoodCard } from '../components'

export function addGoodsForShow (items) {
  items.forEach((item) => createGoodCard(item))
}
