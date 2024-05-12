module.exports = {
  //   collectCoverage: true,
  //   collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  //   coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.(css|scss)$': 'jest-transform-css',
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
};
