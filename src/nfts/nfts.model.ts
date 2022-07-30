import { ObjectType, Field } from '@nestjs/graphql';
import {
  IsOptional,
  IsString,
} from 'class-validator';

@ObjectType()
export class Nft {
  @Field()
  @IsString()
  title: string;

  @Field()
  tokenType: string;

  @Field(type => String)
  @IsOptional()
  balance: string;
}

@ObjectType()
export class Nfts {
  @Field()
  @IsString()
  owner: string;

  @Field()
  @IsOptional()
  totalCount: string;

  @Field(type => [Nft])
  @IsOptional()
  nfts: Nft[];

  @Field()
  @IsString()
  @IsOptional()
  pageKey: string;
}