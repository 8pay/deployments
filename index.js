'use strict';
const Network = require('./lib/network');
const deployments = require('./lib/deployments');

class Deployments {
  constructor(network) {
    if (!deployments[network]) {
      throw Error('Unsupported network ' + network);
    }

    this._network = network;
    this._deployments = deployments[network];
  }

  all() {
    return this._deployments;
  }

  get(contract) {
    if (!this._deployments[contract]) {
      throw new Error('No deployment for contract ' + contract + ' on network ' + this._network);
    }

    return this._deployments[contract];
  }
}

module.exports = Deployments;
module.exports.Network = Network;
