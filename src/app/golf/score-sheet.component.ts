import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GolfService } from './services/golf.service';
import { GolfStore } from './services/golf.store';

@Component({
  selector: 'app-score-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>Your Current Score is {{ store.score() }}</p> `,
  styles: ``,
})
export class ScoreSheetComponent {
  store = inject(GolfStore);
}
