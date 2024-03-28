import eslint from '@eslint/js';
import tslint from 'typescript-eslint';

export default tslint.config(
  {
    extends: [
      eslint.configs.recommended,
      ...tslint.configs.strictTypeChecked,
      ...tslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'ignoreRestSiblings': true }]
    }
  }
);
