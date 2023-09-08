import { getFromLocalStorage } from '../utils'

export function handlerCurrencyName () {
  const currencyName = getFromLocalStorage('profileCurrency')
  if (currencyName.length === 0) {
    return 'бел.руб.'
  } else {
    const basketGoods = getFromLocalStorage('rate')
    const x = basketGoods.find(good => good.name === currencyName)
    return x.alphabeticName
  }
}
