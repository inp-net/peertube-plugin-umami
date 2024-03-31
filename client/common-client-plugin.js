import { initUmami } from './utils'

function register ({ registerHook, peertubeHelpers }) {
  init(registerHook, peertubeHelpers)
    .catch(err => console.error('Cannot initialize Umami plugin', err))
}

export {
  register
}

async function init (registerHook, peertubeHelpers) {
  const success = await initUmami(peertubeHelpers)
  if (!success) return

  registerHook({
    target: 'action:video-watch.player.loaded',
    handler: function () {
	    window.umami.track('load-video-player')
    }
  })
}
