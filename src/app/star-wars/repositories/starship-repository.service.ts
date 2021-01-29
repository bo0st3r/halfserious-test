import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {StarshipResultPageDto} from '../dto/starship-result-page-dto';

@Injectable({
  providedIn: 'root'
})
export class StarshipRepositoryService {

  constructor(private httpClient: HttpClient) {
  }

  public selectAllFromPage(pageId: number = 1): Observable<StarshipResultPageDto> {
    const pageParam = '?page=' + pageId;
    return this.httpClient
      .get<StarshipResultPageDto>(environment.apiUrl + 'starships/' + pageParam);
  }
}
