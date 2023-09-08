import { URL, PAGE_OFFSET } from '../constants'
import { paginate } from './paginate'

export async function getPage (page) {
  const res = await fetch(URL).then((response) => response.json())
  return { items: paginate(res, PAGE_OFFSET, page), pages: Math.ceil(res.length / PAGE_OFFSET) }
}
