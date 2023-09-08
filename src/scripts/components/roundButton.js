export function createRoundBtn (text, className, id) {
  const createdBtn = document.createElement('button')
  createdBtn.innerHTML = text
  createdBtn.className = className
  createdBtn.setAttribute('id', id)
  return createdBtn
}
