import { getFromLocalStorage } from '../utils'

export function handlerCurrencyProfile () {
  const currencyName = getFromLocalStorage('profileCurrency')
  if (currencyName.length === 0) {
    return 1
  } else {
    const basketGoods = getFromLocalStorage('rate')
    const x = basketGoods.find(good => good.name === currencyName)
    return x.course
  }
}
