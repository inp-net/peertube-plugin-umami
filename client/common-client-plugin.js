import { initUmami } from './utils'

function register ({ registerHook, peertubeHelpers }) {
  init(registerHook, peertubeHelpers)
    .catch(err => console.error('Cannot initialize Umami plugin', err))
}

export {
  register
}

async function init (registerHook, peertubeHelpers) {
  const success = await initMatomo(peertubeHelpers)
  if (!success) return

  // registerHook({
  //   target: 'action:router.navigation-end',
  //   handler: function (params) {
  //     window._paq.push(['setDocumentTitle', window.document.title]);
  //     window._paq.push(['setCustomUrl', params.path]);
  //     window._paq.push(['trackPageView']);
  //   }
  // })

  registerHook({
    target: 'action:video-watch.player.loaded',
    handler: function () {
	    window.umami.track('load-video-player')
    }
  })
}

