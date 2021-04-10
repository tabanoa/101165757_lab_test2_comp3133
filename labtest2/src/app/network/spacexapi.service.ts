import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private REST_API = "https://api.spacexdata.com/v3/launches";
  constructor(private httpClient: HttpClient) {}
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API).pipe(retry(3))
  }
}
