import { SELECTORS } from '../constants'

export function handleCloseNewModal () {
  const container = document.querySelector(SELECTORS.modalContent)
  container.textContent = ''
  const modal = document.querySelector(SELECTORS.dialog)
  modal.close()
}
