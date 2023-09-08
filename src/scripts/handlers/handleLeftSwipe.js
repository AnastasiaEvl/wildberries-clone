import { SELECTORS } from '../constants'

export function handleLeftSwipe () {
  const slidesContainer = document.querySelector(SELECTORS.slideContainer)
  const slide = document.querySelector(SELECTORS.sliderSlide)
  const slideWidth = slide.clientWidth
  slidesContainer.scrollLeft -= slideWidth
  if (slidesContainer.scrollLeft <= 0) {
    slidesContainer.scrollLeft = slideWidth * 4
  }
}
