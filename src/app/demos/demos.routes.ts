import { Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { BasicSignalsComponent } from './components/basic-signals.component';
export const DEMO_ROUTES: Routes = [
  {
    path: '', // demos
    component: DemosComponent,
    children: [
      {
        path: 'basic-signals', // demos/basic-signals
        component: BasicSignalsComponent,
      },
    ],
  },
];
