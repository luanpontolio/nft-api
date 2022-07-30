import { Injectable } from '@nestjs/common';
import { initializeAlchemy, getNftsForOwner } from "@alch/alchemy-sdk"
import { settings } from '../utils/Networks';
import { Nfts } from './nfts.model';

@Injectable()
export class NftsService {
  async getNftAll(provider, { owner, contractType, pageKey }) {
    const response = await getNftsForOwner(provider, owner);
    return this.formatData(owner, contractType, response);
  }

  getNetworkSetting(network: string) {
    if (!settings[network]) throw new Error('Invalid network');

    return initializeAlchemy(settings[network]);
  }

  private formatData(owner, contractType, data) {
    console.log(data);
    const nfts = contractType
      ? data.ownedNfts.filter(value => value.tokenType === contractType)
      : data.ownedNfts;

    return {
      owner: owner,
      ...(Object.keys(nfts).length > 0 ? {
        nfts: nfts,
        totalCount: Object.keys(nfts).length,
        pageKey: data.pageKey,
      } : {})
    } as Nfts;
  }
}
