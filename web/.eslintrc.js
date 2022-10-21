module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    '../.eslintrc.package-rules.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {'patterns': [
        '../common/src/**/*',
        '../../common/src/**/*',
        '../../../common/src/**/*',
        '../../../../../common/src/**/*',
        '../../../../../../common/src/**/*',
        '../../../../../../../common/src/**/*'
      ]}
    ],

    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useStore|useClock)',
      },
    ],

    // these two rules aren't useful for us
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // these rules should be turned on quickly to bring us to parity with other workspaces
    '@typescript-eslint/ban-types': 'off',
    'no-async-promise-executor': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      { args: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
  },
  plugins: ['@typescript-eslint'],
};
