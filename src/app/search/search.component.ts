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
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: Observable<Array<FilmModel>>;
  searchTerms = new Subject<string>();
  filmName = '';
  showDropDown: boolean;
  showEmptyDropdown: boolean;
  subscriptionEmptyCheck: Subscription;
  apiFilm: Observable<Array<FilmModel>>;
  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    // api subscription
    this.films = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.fetch(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  // manage the api response
  fetch(term) {
    return this.apiService.getFilms(term);
  }

  // get the user input and pass it to the function that calls the api
  searchClient(term: string): void {
    this.showDropDown = true;
    this.searchTerms.next(term);
  }

  closeDropDown() {
    this.showDropDown = !this.showDropDown;
  }

}
