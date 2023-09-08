import { createCarousel, createModal } from './components'
import {
  addHandlersForCarousel,
  addHandlersForModal,
  addHandlerForFooterAccordion,
  addHandlerForBasket,
  handleScrollTop,
  addHandlerForSearch,
  handleShowMoreGoods, setProfileCurrency, handleBasketUpdateCount
} from './handlers'
import { getFromLocalStorage, setToLocalStorage } from './utils'
import { courses } from './modules'

const initApp = () => {
  if (localStorage === null) {
    setToLocalStorage('basket', [])
  }
  getFromLocalStorage()
  createCarousel()
  createModal()
  courses()
  addHandlersForModal()
  addHandlerForSearch()
  addHandlerForBasket()
  addHandlersForCarousel()
  handleShowMoreGoods()
  addHandlerForFooterAccordion()
  handleScrollTop()
  setProfileCurrency()
  handleBasketUpdateCount()
}
export { initApp }
