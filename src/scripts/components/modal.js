import { SELECTORS } from '../constants'
import { createDivBlock } from './div'

export function createModal () {
  const container = document.querySelector(SELECTORS.container)
  const modal = document.createElement('dialog')
  modal.className = 'modal'
  const modalBox = createDivBlock('modal-box', '', '')
  const closeBtn = document.createElement('button')
  closeBtn.textContent = 'X'
  closeBtn.setAttribute('id', 'close-modal-btn')
  modalBox.append(closeBtn, createDivBlock('', '', 'modal__content'))
  modal.append(modalBox)
  container.append(modal)
}
