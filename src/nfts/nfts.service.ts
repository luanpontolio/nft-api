import { getEndpoint, getNFTByOwner } from '../utils/call';
import { NftFiltersDto } from './dto/nft-filters.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NftsService {
  async getNftAll(endpoint: string, owner: string) {
    return await getNFTByOwner(endpoint, owner);
  }

  static endpoint(network: string): string {
    return getEndpoint(network);
  }
}
