import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <button (click)="store.incrementBy1()" class="btn btn-primary">
      Count by 1
    </button>
    <button (click)="store.incrementBy3()" class="btn btn-primary">
      Count by 3
    </button>
    <button (click)="store.incrementBy5()" class="btn btn-primary">
      Count by 5
    </button>
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
