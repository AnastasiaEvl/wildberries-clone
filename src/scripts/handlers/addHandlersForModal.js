import { SELECTORS } from '../constants'
import { handleCreateNewModal } from './handleCreateNewModal'
import { handleCloseNewModal } from './handleCloseNewModal'

export function addHandlersForModal () {
  const showModal = document.querySelectorAll(SELECTORS.cardContainer)
  for (let i = 0; i < showModal.length; i++) {
    showModal[i].onclick = handleCreateNewModal
  }
  const closeModalBtn = document.querySelector(SELECTORS.closeModalBtn)
  closeModalBtn.addEventListener('click', handleCloseNewModal)
}
