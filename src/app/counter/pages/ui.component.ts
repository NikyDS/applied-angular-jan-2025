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
      [disabled]="store.noNegatives()"
      (click)="store.decrement()"
      class="btn btn-primary"
    >
      -
    </button>
    <span data-testid="current">{{ store.currentValue() }}</span>
    <button (click)="store.increment()" class="btn btn-primary">+</button>
    @if (store.fizzBuzzMessage() !== '') {
      <div class="alert alert-info">
        @switch (store.fizzBuzzMessage()) {
          @case ('fizz') {
            <p>fizz</p>
          }
          @case ('buzz') {
            <p>buzz</p>
          }
          @case ('fizzbuzz') {
            <p>fizzbuzz</p>
          }
        }
      </div>
    }
  </div>`,
  styles: ``,
})
export class UiComponent {
    store = inject(CounterStore)
}
