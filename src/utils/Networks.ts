import { Network } from "@alch/alchemy-sdk"

export const settings = {
  "ethereum": {
    apiKey: process.env.API_KEY_ETH,
    network: Network.ETH_GOERLI,
  },
  "polygon": {
    apiKey: process.env.API_KEY_POLYGON,
    network: Network.ETH_GOERLI,
  }
};
