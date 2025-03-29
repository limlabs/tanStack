export default {
  preset: 'netlify',
  server: {
    fs: {
      allow: ['.', '.output', 'public', 'assets'],  // Make sure 'assets' is included
    },
  },
  static: {
    dir: '.vinxi/build/client/_build',  // This should point to the correct build output directory where the assets are located
  },
}
