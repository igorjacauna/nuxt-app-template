module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Application name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Application description',
      default: 'A NuxtJS application'
    },
    plugins: {
      type: 'checkbox',
      message: 'Select which Vue plugins to install',
      choices: ['axios', 'pwa', 'auth', 'firebase'],
      default: ['axios', 'pwa', 'auth']
    }
  },
  helpers: {
    isEnabled (list, check, opts) {
      if (list[check]) return opts.fn(this)
      else return opts.inverse(this)
    }
  },
  filters: {
    'app/main/router/**/*': 'plugins[\'vue-router\']',
    'app/main/store/**/*': 'plugins[\'vuex\']'
  },
  complete (data) {
    console.log()
    console.log('   Welcome to your new nwjs-vue project!')
    console.log()
    console.log('   Next steps:')
    if (!data.inPlace) console.log(`      \x1b[33m$\x1b[0m cd ${data.destDirName}`)
    console.log('      \x1b[33m$\x1b[0m npm install')
    console.log('      \x1b[33m$\x1b[0m npm run dev')
  }
}