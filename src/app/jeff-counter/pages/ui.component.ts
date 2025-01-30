import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div>
    <button
      [disabled]="store.decrementShouldBeDisabled()"
      (click)="store.decrement()"
      class="btn btn-primary"
    >
      -
    </button>
    <span>{{ store.current() }}</span>
    <button (click)="store.increment()" class="btn btn-primary">+</button>
  </div>`,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
