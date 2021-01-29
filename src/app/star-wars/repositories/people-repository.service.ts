import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PeopleResultPageDto} from '../dto/people-result-page-dto';

@Injectable({
  providedIn: 'root'
})
export class PeopleRepositoryService {

  constructor(private httpClient: HttpClient) {
  }

  public selectAllFromPage(pageId: number = 1): Observable<PeopleResultPageDto> {
    const pageParam = '?page=' + pageId;
    return this.httpClient
      .get<PeopleResultPageDto>(environment.apiUrl + 'people/' + pageParam);
  }
}
