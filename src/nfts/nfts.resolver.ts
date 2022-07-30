import { Inject } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Nfts } from './nfts.model';
import { NftsService } from './nfts.service';

@Resolver(of => Nfts)
export class NftsResolver {
  constructor(@Inject(NftsService) private nftsService: NftsService) {}

  @Query(returns => Nfts)
  async nfts(
    @Args('owner') owner: string,
    @Args('network') network: string,
  ) {
    let args = {
      owner,
    } as any;

    const provider = this.nftsService.getNetworkSetting(network);
    return this.nftsService.getNftAll(provider, args);
  }
}
