export function paginate (array, offset, page) {
  const startIndex = page * offset
  const endIndex = Math.min(array.length, startIndex + offset)

  return array.slice(startIndex, endIndex)
}
