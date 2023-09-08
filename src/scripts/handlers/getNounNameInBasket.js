export function getNoun (number, one, two, three) {
  let noun = null
  if (number >= 5 && number <= 20) {
    noun = two
    return noun
  } else if ((number === 1) || (number > 20 && number % 10 === 1)) {
    noun = one
    return noun
  } else if ((number > 20) && (number % 10 >= 2 && number % 10 <= 4)) {
    noun = three
    return noun
  } else if ((number > 20) && (number % 10 >= 5)) {
    noun = two
    return noun
  } else if (number % 10 === 0) {
    noun = two
    return noun
  } else if (number > 20 && (number > 20 && number % 10 === 1)) {
    noun = two
    return noun
  } else if (number >= 2 && number <= 4) {
    noun = three
    return noun
  }
  noun = one
  return noun
}
