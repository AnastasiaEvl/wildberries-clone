import { SELECTORS } from '../constants'
import { createListItem } from './listItem'
import { createDivBlock } from './div'

export function createGoodImagesSlider ({ image }) {
  const container = document.querySelector(SELECTORS.modalContent)
  const sliderContainer = createDivBlock('', '', 'good-slider')
  const ul = document.createElement('ul')
  ul.className = 'good-slider__slides'
  ul.append(createListItem('good-slider__slides-item', `${image.at(0)}`, 'slide1', 'good-slider__slides-img'),
    createListItem('good-slider__slides-item', `${image.at(1)}`, 'slide2', 'good-slider__slides-img'),
    createListItem('good-slider__slides-item', `${image.at(2)}`, 'slide3', 'good-slider__slides-img'),
    createListItem('good-slider__slides-item', `${image.at(3)}`, 'slide4', 'good-slider__slides-img'))
  const ul2 = document.createElement('ul')
  ul2.className = 'good-slider__aside'
  const li21 = document.createElement('li')
  li21.className = 'good-slider__aside-list'
  const a1 = document.createElement('a')
  a1.setAttribute('href', '#slide1')
  a1.className = 'good-slider__aside-link'
  const img21 = document.createElement('img')
  img21.setAttribute('src', `${image.at(0)}`)
  img21.className = 'good-slider__aside-img'
  a1.append(img21)
  li21.append(a1)
  const li22 = document.createElement('li')
  li22.className = 'good-slider__aside-list'
  const a2 = document.createElement('a')
  a2.setAttribute('href', '#slide2')
  a2.className = 'good-slider__aside-link'
  const img22 = document.createElement('img')
  img22.className = 'good-slider__aside-img'
  img22.setAttribute('src', `${image.at(1)}`)
  a2.append(img22)
  li22.append(a2)
  const li23 = document.createElement('li')
  li23.className = 'good-slider__aside-list'
  const a3 = document.createElement('a')
  a3.setAttribute('href', '#slide3')
  a3.className = 'good-slider__aside-link'
  const img23 = document.createElement('img')
  img23.className = 'good-slider__aside-img'
  img23.setAttribute('src', `${image.at(2)}`)
  a3.append(img23)
  li23.append(a3)
  const li24 = document.createElement('li')
  li24.className = 'good-slider__aside-list'
  const a4 = document.createElement('a')
  a4.setAttribute('href', '#slide4')
  a4.className = 'good-slider__aside-link'
  const img24 = document.createElement('img')
  img24.className = 'good-slider__aside-img'
  img24.setAttribute('src', `${image.at(3)}`)
  a4.append(img24)
  li24.append(a4)
  ul2.append(li21, li22, li23, li24)
  sliderContainer.append(ul2, ul)
  container.append(sliderContainer)
  return container
}
