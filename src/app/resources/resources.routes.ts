import { Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { ResourceListComponent } from './pages/resource-list.component';
import { CreateComponent } from './pages/create.component';

export const RESOURCE_ROUTES: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: 'list',
        component: ResourceListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
