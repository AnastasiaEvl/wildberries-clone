export function createBtn (id, text, className) {
  const createdBtn = document.createElement('button')
  createdBtn.setAttribute('id', id)
  createdBtn.className = className
  createdBtn.textContent = text
  return createdBtn
}
