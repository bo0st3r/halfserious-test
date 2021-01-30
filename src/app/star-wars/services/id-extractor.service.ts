import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdExtractorService {

  constructor() {
  }

  public fromPeopleUrl(url: string): string {
    let newUrl = url.replace('http://swapi.dev/api/people/', '');
    newUrl = newUrl.replace('/', '');
    return newUrl;
  }
}
