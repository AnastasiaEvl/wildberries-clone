import { SELECTORS } from '../constants'

export function handleRightSwipe () {
  const slidesContainer = document.querySelector(SELECTORS.slideContainer)
  const slide = document.querySelector(SELECTORS.sliderSlide)
  const slideWidth = slide.clientWidth
  slidesContainer.scrollLeft += slideWidth
  if (slidesContainer.scrollLeft >= slideWidth * 3) {
    slidesContainer.scrollLeft = 0
  }
}
