module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js', '**/*.test.js'],
  collectCoverageFrom: ['*.js', '!jest.config.js', '!playwright.config.js'],
  coverageDirectory: 'coverage',
  verbose: true
};
