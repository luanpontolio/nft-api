import { Inject } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { NftFiltersDto } from './dto/nft-filters.args';
import { Nfts } from './nfts.model';
import { NftsService } from './nfts.service';

@Resolver(of => Nfts)
export class NftsResolver {
  constructor(@Inject(NftsService) private nftsService: NftsService) {}

  @Query(returns => Nfts, { nullable: true })
  async nfts(
    @Args() args: NftFiltersDto,
  ) {
    const {
      owner,
      network,
      contractType,
      pageKey
    } = args

    let data = { owner } as any

    if (contractType) {
      data = { contractType, ...data }
    }

    if (pageKey) {
      data = { pageKey, ...data }
    }

    const provider = this.nftsService.getNetworkSetting(network);
    return await this.nftsService.getAllNft(provider, data);
  }
}
