async function register ({ registerHook, registerSetting, settingsManager, storageManager }) {
  registerSetting({
    name: 'url',
    label: 'Umami instance URL',
    type: 'input',
    private: false
  })

  registerSetting({
    name: 'site-id',
    label: 'Site id',
    type: 'input',
    private: false
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}

// ############################################################################
