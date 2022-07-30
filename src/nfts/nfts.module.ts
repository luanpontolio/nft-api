import { Module } from '@nestjs/common';
import { NftsResolver } from './nfts.resolver';
import { NftsService } from './nfts.service';

@Module({
  providers: [NftsService, NftsResolver],
  exports: [NftsService]
})
export class NftModule {}
