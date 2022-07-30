import { Network } from "@alch/alchemy-sdk"

export const settings = {
  "rinkeby": {
    apiKey: process.env.API_KEY_ETH_RINKEBY,
    network: Network.ETH_RINKEBY,
  },
  "goerli": {
    apiKey: process.env.API_KEY_ETH_GOERLI,
    network: Network.ETH_GOERLI,
  },
  "polygon": {
    apiKey: process.env.API_KEY_POLYGON,
    network: Network.MATIC_MUMBAI,
  }
};
