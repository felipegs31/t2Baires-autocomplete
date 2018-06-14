import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { HttpModule,
         Http,
         BaseRequestOptions,
         XHRBackend,
         ResponseOptions,
         Response,
         RequestOptions} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Array<Photo>>',
    inject([ApiService, XHRBackend], (apiService, mockBackend) => {

  const mockResponse = [
    {
      year: 2015,
      value: 'The Waterfall Hunter 4: In Kauai and Oahu',
      obj_type: 'film',
      id: 90188,
      // tslint:disable-next-line:max-line-length
      image_code: '<img src=\'https://www.slated.com/static//img/avatar-film-50x50.png\' alt=\'The Waterfall Hunter 4: In Kauai and Oahu\' class=\'filmIcon\' data-tracked=\'False\' data-id=\'20/90188\' />',
      label: 'The Waterfall Hunter 4: In K...',
      link_code: 'The Waterfall Hunter 4: In Kauai and Oahu',
      description: 'The Waterfall Hunter takes you on the hike to Hawaii\'s beautiful waterfalls.'
    },
  ];

  mockBackend.connections.subscribe((connection) => {
    connection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify(mockResponse)
    })));
  });

  apiService.getFilms('The Waterfall Hunter 4: In Kauai and Oahu').subscribe((films) => {
    console.log(films);
    expect(films.length).toBe(1);
    expect(films[0].year).toBe(2015);
  });

  }));

});
