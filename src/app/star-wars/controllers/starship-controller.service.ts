import {Injectable} from '@angular/core';
import {StarshipDto} from '../dto/starship-dto';
import {StarshipRepositoryService} from '../repositories/starship-repository.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipControllerService {
  constructor(private starshipRepository: StarshipRepositoryService) {
    this.init();
  }

  private _starships: StarshipDto[] = [];

  get starships(): StarshipDto[] {
    return this._starships;
  }

  set starships(value: StarshipDto[]) {
    this._starships = value;
  }

  public getStarships(page: number = 1): void {
    this.starshipRepository.selectAllFromPage(page)
      .subscribe(starships => {
          this.starships = this.starships.concat(starships.results);
          if (starships.next) {
            page++;
            this.getStarships(page);
          }
        }
      );
  }

  private init(): void {
    this.getStarships();
  }
}
