import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { GolfService } from './services/golf.service';
import { GolfStore } from './services/golf.store';

@Component({
  selector: 'app-golf-hole',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
  imports: [],
  template: `
    <p>Your Score For This Hole {{ store.score() }}</p>
    <button
      (click)="store.takeAStroke()"
      class="btn btn-sm btn-success btn-circle"
    >
      +
    </button>
    <button
      [disabled]="store.removeStrokeDisabled()"
      (click)="store.removeStroke()"
      class="btn btn-sm btn-warning btn-circle"
    >
      -
    </button>
  `,
  styles: ``,
})
export class GolfHoleComponent {
  store = inject(GolfStore);
}
