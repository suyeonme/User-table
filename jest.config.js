module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx|ts)'],
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/db/(.*)': '<rootDir>/src/database/$1',
    '^@/routes/(.*)': '<rootDir>/src/routes/$1',
    '^@/services/(.*)': '<rootDir>/src/services/$1',
    '^@/controllers/(.*)': '<rootDir>/src/controllers/$1',
    '^@/types/(.*)': '<rootDir>/src/types/$1',
    '^@/config/(.*)': '<rootDir>/src/config/$1',
    '^@/loaders/(.*)': '<rootDir>/src/loaders/$1',
    '^@/utils/(.*)': '<rootDir>/src/utils/$1',
    '^@/middlewares/(.*)': '<rootDir>/src/middlewares/$1',
  },
};