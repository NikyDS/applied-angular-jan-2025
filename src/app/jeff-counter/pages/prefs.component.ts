import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
} from '@angular/core';
import { ByValues, CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="join">
    @for (by of store.getByValues(); track by) {
      <button
        (click)="store.setBy(by)"
        [disabled]="store.by() === by"
        class="btn join-item"
      >
        {{ by }}
      </button>
    }
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
