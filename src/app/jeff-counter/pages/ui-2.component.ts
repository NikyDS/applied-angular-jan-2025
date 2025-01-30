import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoundButtonDirective } from '@shared/directives';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RoundButtonDirective],
  template: ` <p>Ui Two!</p>
    <div>
      <button
        title="This button decrements the count"
        [disabled]="store.decrementShouldBeDisabled()"
        (click)="store.decrement()"
        appRound
        variant="accent"
      >
        -
      </button>
      <span>{{ store.current() }}</span>
      <button (click)="store.increment()" appRound>+</button>
    </div>`,
  styles: ``,
})
export class Ui2Component {
  store = inject(CounterStore);
}
