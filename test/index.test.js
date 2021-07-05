'use strict';
const { expect } = require('chai');
const Deployments = require('..');

describe('Deployments', () => {
  const deployments = new Deployments(Deployments.Network.PRIVATE);

  it('should get the deployments for all contracts', () => {
    const contracts = deployments.all();
    expect(contracts).to.be.an('object');
    const contract = Object.values(contracts)[0];
    expect(contract).to.have.property('address');
    expect(contract).to.have.property('abi');
    expect(contract).to.have.property('blockNumber');
  });

  it('should get the deployment for a contract', () => {
    const contract = deployments.get('OneTime');
    expect(contract).to.have.property('address');
    expect(contract).to.have.property('abi');
    expect(contract).to.have.property('blockNumber');
    expect(contract.abi).to.be.an('array');
  });
});
