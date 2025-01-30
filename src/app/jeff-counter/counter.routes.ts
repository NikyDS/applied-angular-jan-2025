import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui.component';
import { PrefsComponent } from './pages/prefs.component';
import { CounterStore } from './services/counter.store';
import { RyanPrefsComponent } from './pages/ryan-prefs.component';
import { canMatchFeature } from '@shared';
import { Ui2Component } from './pages/ui-2.component';
export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [CounterStore],
    children: [
      {
        path: 'ui',
        canMatch: [canMatchFeature('jeff-experiment')],
        component: Ui2Component,
      },
      {
        path: 'ui',
        component: UiComponent,
      },
      {
        path: 'prefs',
        canMatch: [canMatchFeature('alt-prefs')],
        component: RyanPrefsComponent,
      },
      {
        path: 'prefs',
        component: PrefsComponent,
      },
    ],
  },
];
