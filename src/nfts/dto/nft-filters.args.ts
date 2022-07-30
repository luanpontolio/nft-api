import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsEthereumAddress, Validate } from 'class-validator';
import { IsTokenTypeValid } from '../validators/IsTokenTypeValid';

@ArgsType()
export class NftFiltersDto {
  @Field()
  @IsEthereumAddress()
  owner: string;

  @Field()
  network: string;

  @Field()
  @Validate(IsTokenTypeValid)
  contractType?: string;

  @Field()
  pageKey?: string;
}
