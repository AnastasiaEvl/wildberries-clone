import { createGoodModal } from '../components'
import { SELECTORS, URL } from '../constants'

export function handleCreateNewModal (event) {
  const goodId = event.currentTarget.id
  const data = fetch(URL + `/${goodId}`)
  data.then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Error found')
    }
  })
    .then(element => createGoodModal(element))
    .catch((error) => console.error(error))
  const modal = document.querySelector(SELECTORS.dialog)
  modal.showModal()
  event.stopPropagation()
}
