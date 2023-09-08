import { setToLocalStorage } from '../utils'
import { handlerCurrencyProfile } from './handlerCurrencyProfile'
import { handlerCurrencyName } from './handlerCurrencyName'

export function setProfileCurrency () {
  const getCourse = document.getElementById('courses')
  getCourse.addEventListener('click', function (event) {
    if (event.target.id === 'ru') {
      setToLocalStorage('profileCurrency', 'ru')
      handlerCurrencyProfile()
      handlerCurrencyName()
      window.location.reload()
    } else if (event.target.id === 'usd') {
      setToLocalStorage('profileCurrency', 'usd')
      handlerCurrencyProfile()
      handlerCurrencyName()
      window.location.reload()
    } else if (event.target.id === 'by') {
      setToLocalStorage('profileCurrency', 'by')
      handlerCurrencyProfile()
      handlerCurrencyName()
      window.location.reload()
    }
  })
}
