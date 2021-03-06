module.exports = {
  publicPath: "/",
  pwa: {
    name: 'Opto Math',
    themeColor: '#B8E986',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: [
      {
        src: 'img/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'img/png'
      },
      {
        src: 'img/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'img/png'
      },
      {
        src: 'img/icons/android-chrome-maskable-192x192.png',
        sizes: '192x192',
        type: 'img/png',
        purpose: 'maskable'
      },
      {
        src: 'img/icons/android-chrome-maskable-512x512.png',
        sizes: '512x512',
        type: 'img/png',
        purpose: 'maskable'
      }
    ],
    manifestOptions: {
      background_color: '#0000FC'
    }
  },
  transpileDependencies: ["vuetify"]
};
