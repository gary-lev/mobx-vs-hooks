module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
