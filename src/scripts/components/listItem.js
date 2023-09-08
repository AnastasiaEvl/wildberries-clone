export function createListItem (className, src, id, classNameImg) {
  const liElement = document.createElement('li')
  if (className !== '') {
    liElement.className = className
  }
  if (id !== '') {
    liElement.setAttribute('id', id)
  }
  if (classNameImg !== '') {
    const img = document.createElement('img')
    img.setAttribute('src', src)
    img.className = classNameImg
    liElement.append(img)
  }
  return liElement
}
