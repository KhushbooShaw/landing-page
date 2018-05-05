import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RecommendationService {

  public API = 'http://localhost:8080/api/v1/recommendation/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }
  get(id: string) {
    return this.http.get('http://localhost:8080/api/v1/recommendation/categoryTopics' + '/' + id);
  }
  getAllGames(): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/recommendation/topics');
  }


}
