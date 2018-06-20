import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

  public people: any[];
  public selectedCharacter: any;

  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
    this.people = new Array<any>();
  }

  doGetRequest(url: string): Observable<any>{
    return this.http.get(url);
  }

}
