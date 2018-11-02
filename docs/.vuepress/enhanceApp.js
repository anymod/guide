import Cookie from 'js-cookie'
export default ({
  Vue,      // the version of Vue being used in the VuePress app
  options,  // the options for the root Vue instance
  router,   // the router instance for the app
  siteData, // site metadata
}) => {

  /*
   * Set referrer & UTM cookies if not already set
   */
  
  const isProduction = window.location.href.indexOf('anymod.com') > -1
  ,     cookieDomain = isProduction ? '.anymod.com' : 'localhost'

  let referrerStr = Cookie.get('_anmr')
  if (!referrerStr || referrerStr.length < 4) {
    referrerStr = document.referrer || document.referer
    if (!referrerStr || referrerStr.length < 4) referrerStr = 'none'
    Cookie.set('_anmr', referrerStr, { domain: cookieDomain })
  }

  if (!Cookie.get('_anmu')) {
    Cookie.set('_anmu', window.location.search.substring(1), { domain: cookieDomain })
  }
}