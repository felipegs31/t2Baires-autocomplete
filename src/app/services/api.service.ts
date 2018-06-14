import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FilmModel } from '../models/film.model';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  getFilms(term: string): Observable<any[]> {
      const filmList = this.http
        .get(`http://www.slated.com/films/autocomplete/profiles/?term=${term}`)
          // tslint:disable-next-line:max-line-length
          .map((r: Response) => {
            let resp = r.json();
            resp = this.fixImageUrl(resp);
            return r.json();
          })
          .catch(this.handleError);
      return filmList;
  }

  // Treat the error
  handleError(error: any) {
    return Observable.throw(error);
  }

  fixImageUrl(resp) {
    return resp.map( (elem) => {
      const strsplit = elem.image_code.split(' ');
      const image = strsplit.length > 1 ? strsplit[1].slice(5, -1) : '';
      elem.image_code = image;
      console.log(elem);
    });
  }
}
