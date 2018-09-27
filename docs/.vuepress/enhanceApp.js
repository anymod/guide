export default ({
  Vue,      // the version of Vue being used in the VuePress app
  options,  // the options for the root Vue instance
  router,   // the router instance for the app
  siteData  // site metadata
}) => {
  if (!window.Anymod) return
  const pagesWithSandbox = [
    '/guide/quickstart.html',
    '/live-demos/localhost.html'
  ]
  const toggleSandboxByPath = path => {
    if (!Anymod.Event) return
    let e = pagesWithSandbox.includes(path || location.pathname) ? 'sandbox:sidebar:open' : 'sandbox:close'
    Anymod.Event.emit(e)
  }
  router.beforeEach((to, from, next) => {
    toggleSandboxByPath(to.path)
    next()
  })
  Anymod.ready(() => {
    toggleSandboxByPath()
    Anymod.Event.on('sandbox:mounted', toggleSandboxByPath)
  })
}