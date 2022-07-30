import { Network, initializeAlchemy, getNftsForOwner } from "@alch/alchemy-sdk"
import { ENDPOINTS } from './Networks';
import fetch from 'node-fetch';

const settings = {
  apiKey: process.env.API_KEY, // Replace with your Alchemy API Key.
  network: Network.ETH_RINKEBY, // Replace with your network.
  maxRetries: 10,
};

export const getEndpoint = (
  type: string
): string | undefined => {
  return ENDPOINTS[type];
};

export const getNFTByOwner = async (
  endpoint: string,
  owner: string,
) => {
  const alchemy = initializeAlchemy(settings);
  const response = await getNftsForOwner(alchemy, owner);

  const formatData = {
    owner,
    nfts: response.ownedNfts,
    totalCount: response.totalCount,
  }

  return formatData;
}
