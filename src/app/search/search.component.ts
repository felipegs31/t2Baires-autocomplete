import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Observable } from 'rxjs/Observable';
import { FilmModel } from '../models/film.model';
import { Subject } from 'rxjs/Subject';
import { FormControl,
  FormGroup,
  FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: Observable<any[]>;
  searchTerms = new Subject<string>();
  filmName = '';
  filmsBackend: Array<FilmModel>;
  showDropDown: boolean;
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.films = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        ? this.fetch(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  fetch(term) {
    return this.apiService.getFilms(term);
  }
  searchClient(term: string): void {
    this.showDropDown = true;
    this.searchTerms.next(term);
  }

  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

}
