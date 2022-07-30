import { Injectable } from "@nestjs/common";
import {ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

const tokenTypes = ['ERC721', 'ERC115'];

@ValidatorConstraint({ async: false })
@Injectable()
export class IsTokenTypeValid implements ValidatorConstraintInterface {
  public validate(value: string): boolean {
    if (!tokenTypes.includes(value)) {
      return false;
    }
  }

  public defaultMessage(): string {
    return `Should be ${tokenTypes.join('or')} `;
  }
}
