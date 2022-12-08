import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const config: JestConfigWithTsJest = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['__tests__'],
};

export default config;
