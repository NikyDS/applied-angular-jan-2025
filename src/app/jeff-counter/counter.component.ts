import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterStore } from './services/counter.store';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex gap-4">
      <a routerLink="ui" class="link">UI</a>
      <a routerLink="prefs" class="link">Prefs</a>
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class CounterComponent {}
