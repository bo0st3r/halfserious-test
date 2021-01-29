import {PeopleDto} from './people-dto';

export interface PeopleResultPageDto {
  count: number;
  next: string;
  previous: string;
  results: PeopleDto[];
}
