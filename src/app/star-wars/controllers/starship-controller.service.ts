import {Injectable} from '@angular/core';
import {StarshipDto} from '../dto/starship-dto';
import {StarshipRepositoryService} from '../repositories/starship-repository.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipControllerService {
  private _starships: StarshipDto[] = [];
  private _starshipsSubject: BehaviorSubject<StarshipDto[]> = new BehaviorSubject<StarshipDto[]>(null);

  constructor(private starshipRepository: StarshipRepositoryService) {
    this.init();
  }

  private init(): void {
    this.getStarships();
  }

  public getStarships(page: number = 1): void {
    this.starshipRepository.selectAllFromPage(page)
      .subscribe(starships => {
        this.starships = this.starships.concat(starships.results);
        this._starshipsSubject.next(this.starships);
        if (starships.next) {
            page++;
            this.getStarships(page);
          }
        }
      );
  }

  get starships(): StarshipDto[] {
    return this._starships;
  }

  set starships(value: StarshipDto[]) {
    this._starships = value;
  }

  get starshipsSubject(): Subject<StarshipDto[]> {
    return this._starshipsSubject;
  }

  public starshipsObservable(): Observable<StarshipDto[]>{
    return this.starshipsSubject.asObservable();
  }
}
