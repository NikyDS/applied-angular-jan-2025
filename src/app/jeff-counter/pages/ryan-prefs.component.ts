import {
  Component,
  ChangeDetectionStrategy,
  model,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="card bg-neutral text-white w-96">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Set Count Interval</h2>
        <input
          type="range"
          min="1"
          max="5"
          class="range range-accent"
          step="2"
          [(ngModel)]="range"
          (change)="rangeChanged()"
        />
        <div class="flex w-full justify-between px-2 text-s">
          <span>1</span>
          <span>3</span>
          <span>5</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class RyanPrefsComponent {
  store = inject(CounterStore);
  //  range = model(this.store.interval());
  range = 999;

  rangeChanged() {
    //  this.store.setInterval(this.range());
  }
}
