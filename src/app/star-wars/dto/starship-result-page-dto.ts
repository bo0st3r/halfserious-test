import {StarshipDto} from './starship-dto';

export interface StarshipResultPageDto {
  count: number;
  next: string;
  previous: string;
  results: StarshipDto[];
}
