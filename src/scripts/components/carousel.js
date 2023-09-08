import { createRoundBtn } from './roundButton'
import { createListItem } from './listItem'
import { SELECTORS } from '../constants'
import slideOne from '../../assets/pictures/sales.png'
import slideTwo from '../../assets/pictures/delivery.png'
import slideThree from '../../assets/pictures/ready-for-school.png'
import slideFour from '../../assets/pictures/sales-second-slide.png'

export function createCarousel () {
  const container = document.querySelector(SELECTORS.container)
  const section = document.createElement('section')
  section.className = 'slider'
  const imgList = document.createElement('ul')
  imgList.className = 'slider__container'
  imgList.setAttribute('id', 'slides-container')
  imgList.append(createListItem('slider__slide', `${slideOne}`, undefined, 'slider__img'),
    createListItem('slider__slide', `${slideTwo}`, undefined, 'slider__img'),
    createListItem('slider__slide', `${slideThree}`, undefined, 'slider__img')
    , createListItem('slider__slide', `${slideFour}`, undefined, 'slider__img'))
  section.append(createRoundBtn('&#8249;', 'slider__btn', 'slide-arrow-prev'),
    createRoundBtn(' &#8250;', 'slider__btn', 'slide-arrow-next'),
    imgList)
  container.prepend(section)
  return container
}
