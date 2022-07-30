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
    // // const endpoint = NftsService.endpoint(network);

    // // if (!endpoint) throw new Error('error é ak');
    // console.log(endpoint);
    return this.nftsService.getNftAll(process.env.PROVIDER_URL_ETHEREUMN, owner);
  }
}
