export function handleShowAccordion (button) {
  const content = button.nextElementSibling
  content.classList.toggle('show')
  button.classList.toggle('active')
}
