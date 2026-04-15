module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js', '**/*.test.js'],
  collectCoverageFrom: ['*.js', '!jest.config.cjs', '!playwright.config.js', '!eslint.config.js'],
  coverageDirectory: 'coverage',
  verbose: true,
};