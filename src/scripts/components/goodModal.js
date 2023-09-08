import { createGoodImagesSlider } from './goodImagesSlider'
import { createGoodDetails } from './goodDetails'

export function createGoodModal ({ title, price, image, description, id, number }) {
  createGoodImagesSlider({ image })
  createGoodDetails({ title, price, image, description, id, number })
}
