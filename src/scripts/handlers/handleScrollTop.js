import { SELECTORS } from '../constants'

export function handleScrollTop () {
  const scrollTopBtn = document.querySelector(SELECTORS.scrollTopBtn)
  window.addEventListener('scroll', function () {
    if (window.scrollY > 1400) {
      scrollTopBtn.style.display = 'block'
    } else {
      scrollTopBtn.style.display = 'none'
    }
  })
}
