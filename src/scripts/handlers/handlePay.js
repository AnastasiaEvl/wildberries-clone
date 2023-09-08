import { handleCloseNewModal } from './handleCloseNewModal'
import { handleBasketUpdateCount } from './handleBasketUpdateCount'

export function handlePay () {
  handleCloseNewModal()
  localStorage.removeItem('basket')

  document.querySelectorAll('.btn__basket.inactive').forEach(item => {
    item.classList.remove('inactive')
  })

  handleBasketUpdateCount()
}
