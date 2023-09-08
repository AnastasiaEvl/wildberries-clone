import { handleCloseNewModal } from './handleCloseNewModal'
import { getFromLocalStorage, setToLocalStorage, makeGoodCartInactive } from '../utils'
import { handleBasketUpdateCount } from './handleBasketUpdateCount'

export function handleAddToBasket (event) {
  event.preventDefault()
  const goodId = event.target.id
  const storageElements = getFromLocalStorage('basket')
  if (storageElements.find(good => good.id === goodId)) {
    return 1
  } else {
    const data = { id: goodId, quantity: 1 }
    storageElements.push(data)
    setToLocalStorage('basket', storageElements)
    handleBasketUpdateCount()
    handleCloseNewModal()

    makeGoodCartInactive(goodId)
  }
  event.stopPropagation()
}
