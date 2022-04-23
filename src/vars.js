const mode = 'MAINNET';

const shared = {
}

const testnet = {
  API_URL: 'https://node.testnet.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.testnet.algoexplorerapi.io',
}

const mainnet = {
  API_URL: 'https://node.algoexplorerapi.io',
  INDEXER_URL: 'https://algoindexer.algoexplorerapi.io',
}

export default {
  ...shared,
  ...(mode === 'TESTNET' ? testnet : mainnet),
}