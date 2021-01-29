import {Injectable} from '@angular/core';
import {PeopleRepositoryService} from '../repositories/people-repository.service';
import {PeopleDto} from '../dto/people-dto';

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  constructor(private peopleRepositoryService: PeopleRepositoryService) {
    this.init();
  }

  private _people: Map<string, PeopleDto> = new Map<string, PeopleDto>();

  get people(): Map<string, PeopleDto> {
    return this._people;
  }

  public getPeopleById(id: string): PeopleDto {
    return this.people.get(id);
  }

  public getPeople(page: number = 1): void {
    this.peopleRepositoryService.selectAllFromPage(page)
      .subscribe(people => {
          this.addList(people.results);
          if (people.next) {
            page++;
            this.getPeople(page);
          }
        }
      );
  }

  private addList(people: PeopleDto[]): void {
    people.forEach(p => {
      this.people.set(p.url, p);
    });
  }

  private init(): void {
    this.getPeople();
  }
}
