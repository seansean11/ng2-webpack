import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { NoContent } from './no-content';

export const ROUTES : Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NoContent }
];
