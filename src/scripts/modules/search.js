export function search (items, query) {
  const pattern = query.toLowerCase()
  return items.filter(
    (item) =>
      item.number === query ||
      item.title.toLowerCase().includes(pattern) ||
      item.description.toLowerCase().includes(pattern)
  )
}
