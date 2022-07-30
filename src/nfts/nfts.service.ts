import { Injectable } from '@nestjs/common';
import { initializeAlchemy, getNftsForOwner } from "@alch/alchemy-sdk"
import { settings } from '../utils/Networks';

@Injectable()
export class NftsService {
  async getNftAll(provider, owner: string) {
    const response = await getNftsForOwner(provider, owner);

    return this.formatData({ owner, ...response });
  }

  getNetworkSetting(network: string) {
    if (!settings[network]) throw new Error('Invalid network');

    return initializeAlchemy(settings[network]);
  }

  private formatData(data) {
    return {
      owner: data.owner,
      nfts: data.ownedNfts,
      totalCount: data.totalCount,
    };
  }
}
