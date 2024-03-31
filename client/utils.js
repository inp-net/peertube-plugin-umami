function initUmami(peertubeHelpers) {
  return peertubeHelpers.getSettings()
    .then(s => {
      if (!s || !s['site-id'] || !s['url']) {
        console.error('Umami settings are not set.')
        return false
      }

      const umamiUrl = s['url']
      const siteId = s['site-id']

      document.getElementByTagName('head')[0].insertAdjacentHTML('beforeend', `<script defer src="${umamiUrl}/script.js" data-website-id="${siteId}"></script>`)

      return true
    })
}

export {
  initUmami
}
