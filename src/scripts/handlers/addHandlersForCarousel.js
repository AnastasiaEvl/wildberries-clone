import { SELECTORS } from '../constants'
import { handleRightSwipe } from './handleRightSwipe'
import { handleLeftSwipe } from './handleLeftSwipe'

export function addHandlersForCarousel () {
  const nextButton = document.querySelector(SELECTORS.sliderNextBtn)
  const prevButton = document.querySelector(SELECTORS.sliderPrevBtn)
  nextButton.addEventListener('click', handleRightSwipe)
  prevButton.addEventListener('click', handleLeftSwipe)
}
