/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'html'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['.', 'node_modules', 'src'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      compilerOptions.paths /* , { prefix: '<rootDir>/' }, */,
    ),
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};