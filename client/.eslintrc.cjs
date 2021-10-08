module.exports = {
  extends: ['@digital-taco/eslint-config'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
}
