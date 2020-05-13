const baseExtends = ['eslint:recommended', 'plugin:github/es6']

const tsExtends = [
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'prettier/@typescript-eslint',
]

const prettierExtends = ['plugin:prettier/recommended']

const jestExtends = ['plugin:jest/recommended']

const tsRules = {
  'eslint-comments/no-use': 'off',
  'import/no-namespace': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'no-public'}],
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-ignore': 'error',
  camelcase: 'off',
  '@typescript-eslint/camelcase': 'error',
  '@typescript-eslint/class-name-casing': 'error',
  '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
  '@typescript-eslint/func-call-spacing': ['error', 'never'],
  '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][A-Za-z]*$'],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  // '@typescript-eslint/no-object-literal-type-assertion': ['error', {allowArguments: true}],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-function-type': 'warn',
  '@typescript-eslint/prefer-includes': 'error',
  // '@typescript-eslint/prefer-interface': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/semi': ['error', 'never'],
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/unbound-method': 'error',
}
const jsRules = {
  'eslint-comments/no-use': 'off',
  'import/no-namespace': 'off',
  'no-unused-vars': 'off',
  camelcase: 'off',
}

module.exports = {
  extends: [...baseExtends, ...prettierExtends],
  root: true,
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [...tsExtends, ...prettierExtends],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        project: 'packages/*/tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'prettier'],
      rules: tsRules,
    },
    {
      files: ['**/*.spec.ts'],
      extends: [...tsExtends, ...jestExtends, ...prettierExtends],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        project: ['tsconfig.json', 'packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['jest', '@typescript-eslint', 'prettier'],
      rules: tsRules,
    },
    {
      files: ['**/*.js', '*.js'],
      extends: [...baseExtends, ...prettierExtends],
      rules: jsRules,
      plugins: ['prettier'],
    },

    {
      files: ['**/*.md', '*.md'],
      processor: 'markdown/markdown',
      plugins: ['markdown'],
    },
    {
      files: ['**/*.json', '*.json'],
      extends: [...baseExtends, 'plugin:json/recommended', ...prettierExtends],
    },
  ],
}
