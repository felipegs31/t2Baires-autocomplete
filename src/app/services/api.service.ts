import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FilmModel } from '../models/film.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  getFilms(term: string): Observable<Array<FilmModel>> {
      const filmList = this.http
        .get(`${environment.film.film}?term=${term}`)
          .map((r: Response) => {
            return r.json();
          })
          .catch(this.handleError);
      return filmList;
  }

  // Treat the error
  handleError(error: any) {
    return Observable.throw(error);
  }
}
