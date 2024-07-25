module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-stylus'),
  ],
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  overrides: [{
    files: '*.astro',
    options: {
      parser: 'astro',
      printWidth: 20000
    },
    customSyntax: 'postcss-html',
  }, ],
}