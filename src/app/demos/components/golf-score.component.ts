import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-golf-score',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>
      Your Current Score:
      <span>{{ currentScore() }}</span>
    </p>

    <div>
      <button (click)="addStroke()" class="btn btn-primary">Took A Shot</button>
    </div>
  `,
  styles: ``,
})
export class GolfScoreComponent {
  currentScore = signal(0); // state

  addStroke() {
    // this.currentScore.set(this.currentScore() + 1); // changeable
    this.currentScore.update((c) => c + 1);
    // hey, update the dom wherever the currentScore is shown now.
  }
}
