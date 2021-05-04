process.env.TZ = 'UTC';

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    quasar: '<rootDir>/node_modules/quasar/dist/quasar.umd.min.js',
  },
};
