export function getFromLocalStorage (name) {
  try {
    return JSON.parse(localStorage.getItem(name)) ?? []
  } catch (err) {
    return []
  }
}

export function setToLocalStorage (name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getGoodCartButton (id) {
  return document.querySelectorAll(`.btn__basket[id="${id}"]`)
}

export function makeGoodCartInactive (id) {
  const buttons = getGoodCartButton(id)
  buttons.forEach((button) => {
    button.classList.add('inactive')
    button.innerText = 'В корзине'
  })
}

export function makeGoodCartActive (id) {
  const buttons = getGoodCartButton(id)
  buttons.forEach((button) => {
    button.classList.remove('inactive')
    button.innerText = 'В корзину'
  })
}
