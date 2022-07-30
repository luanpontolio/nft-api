import { ObjectType, Field } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
} from 'class-validator';

@ObjectType()
export class Nft {
  @Field()
  @IsString()
  @IsOptional()
  title: string;

  @Field()
  @IsOptional()
  tokenType?: string;

  @Field(type => String)
  @IsOptional()
  balance: string;
}

@ObjectType()
export class Nfts {
  @Field()
  owner: string;

  @Field()
  @IsOptional()
  totalCount?: number;

  @IsOptional()
  @Field(type => [Nft])
  nfts?: Nft[];

  @Field()
  @IsString()
  @IsOptional()
  pageKey?: string;
}
