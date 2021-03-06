/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const browserify = require('@cypress/browserify-preprocessor');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const options = browserify.defaultOptions;

  options.browserifyOptions.transform[1][1].babelrc = true;
  options.typescript = require.resolve('typescript');

  // React webpack transpiling for NextJS
  require('@cypress/react/plugins/react-scripts')(on, config);
  // Code coverage
  require('@cypress/code-coverage/task')(on, config);
  on('file:preprocessor', browserify(options));

  return config;
};
