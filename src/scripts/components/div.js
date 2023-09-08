export function createDivBlock (id, text, className) {
  const createdDiv = document.createElement('div')
  if (id !== '') {
    createdDiv.setAttribute('id', id)
  }
  if (text !== '') {
    createdDiv.textContent = text
  }
  if (className !== '') {
    createdDiv.className = className
  }
  return createdDiv
}
