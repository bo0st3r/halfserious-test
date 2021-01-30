import {Injectable} from '@angular/core';
import {PeopleRepositoryService} from '../repositories/people-repository.service';
import {PeopleDto} from '../dto/people-dto';
import {IdExtractorService} from '../services/id-extractor.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {StarshipDto} from '../dto/starship-dto';

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  private _people: Map<string, PeopleDto> = new Map<string, PeopleDto>();
  private _peopleSubject: BehaviorSubject<Map<string, PeopleDto>> = new BehaviorSubject<Map<string, PeopleDto>>(null);

  constructor(private peopleRepositoryService: PeopleRepositoryService, private idExtractor: IdExtractorService) {
    this.init();
  }

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
          this._peopleSubject.next(this.people);
          if (people.next) {
            page++;
            this.getPeople(page);
          }
        }
      );
  }

  private addList(people: PeopleDto[]): void {
    people.forEach(p => {
      const id = this.idExtractor.fromPeopleUrl(p.url);
      this.people.set(id, p);
    });
  }

  private init(): void {
    this.getPeople();
  }

  get peopleSubject(): Subject<Map<string, PeopleDto>> {
    return this._peopleSubject;
  }

  public peopleObservable(): Observable<Map<string, PeopleDto>>{
    return this.peopleSubject.asObservable();
  }
}
