# @8pay/deployments

An helper module that keeps track of all 8pay's deployments.
It provides an easy way to obtain the addresses where core smart contracts are deployed and the abis to interact with them.

## Usage

```js
const Deployments = require('@8pay/deployments');

const deployments = new Deployments(Deployments.Network.BSC);

const contract = deployments.get('OneTime');

console.log(contract);

/*
{
    address: '0x...',
    abi: [...],
    blockNumber: 3029344
}
*/
```

## Supported networks

* BSC
* ETHEREUM
* SANDBOX
