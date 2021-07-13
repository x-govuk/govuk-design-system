import CookieBanner from './components/cookie-banner.js'

// Initialise cookie banner
var $cookieBanner = document.querySelector('[data-module="govuk-cookie-banner"]')
new CookieBanner($cookieBanner).init()
