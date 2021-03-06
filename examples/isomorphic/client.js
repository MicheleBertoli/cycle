'use strict';
let Cycle = require('../../lib/core/cycle');
let {app} = require('./app');

function contextDriver() {
  return {
    get: () => Cycle.Rx.Observable.just(window.appContext)
  };
}

Cycle.run(app, {
  DOM: Cycle.makeDOMDriver('.app-container'),
  context: contextDriver
});
