module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'prettier', // Prettier와 충돌하는 ESLint 규칙 비활성화
  ],
  plugins: ['prettier', 'cypress'],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙을 ESLint 에러로 표시
    'no-undef': 'error',
  },
  // Cypress 파일용 설정
  overrides: [
    {
      files: ['cypress/**/*.js'],
      extends: ['plugin:cypress/recommended'],
      env: {
        'cypress/globals': true,
      },
    },
  ],
};
