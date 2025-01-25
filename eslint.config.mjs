import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    vueVersion: 2,
  },
  stylistic: {
    overrides: {
      'curly': ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
    },
  },
  regexp: {
    overrides: {
      'regexp/no-unused-capturing-group': 'off',
    },
  },
  typescript: {
    overrides: {
      'ts/no-require-imports': 'off', // Allow require
      'ts/no-var-requires': 'off', // Allow require
    },
  },
})
