import { Module } from '@nestjs/common';
import { NftsResolver } from './nfts.resolver';
import { NftsService } from './nfts.service';
import { IsTokenTypeValid } from './validators/IsTokenTypeValid';

@Module({
  providers: [NftsService, NftsResolver, IsTokenTypeValid],
  exports: [NftsService, IsTokenTypeValid]
})
export class NftModule {}
