/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'asset-cache': {
      include: [
        'assets/**/*',
      ]
    },
    'esw-cache-fallback': {
      patterns: [ '/' ],
      version: '20171010-1'
    }
  });

  app.import('node_modules/tachyons/css/tachyons.min.css');

  return app.toTree();
};
