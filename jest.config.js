module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  collectCoverage: true,
  // collectCoverageFrom: ['packages/**/src/*.ts(x)'],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
