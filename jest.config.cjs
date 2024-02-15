/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('ts-jest/presets/index.js');

module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
};