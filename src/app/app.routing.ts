import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const APP_ROUTES: Routes = [
   { path: '', component: SearchComponent, pathMatch: 'full' },
   // In case of a unknown path, redirect to Search
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
