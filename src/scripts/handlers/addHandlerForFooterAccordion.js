import { handleShowAccordion } from './handleShowAccordion'
import { SELECTORS } from '../constants'

export function addHandlerForFooterAccordion () {
  const accordionButtons = document.querySelectorAll(SELECTORS.footerAccordion)

  accordionButtons.forEach(function (button) {
    button.addEventListener('click', () => { handleShowAccordion(button) })
  })
}
