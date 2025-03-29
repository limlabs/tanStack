export default {
  preset: 'netlify',
  server: {
    fs: {
      allow: ['.', '.output', 'public', 'assets'],  // Make sure 'assets' is included
    },
  },
}
