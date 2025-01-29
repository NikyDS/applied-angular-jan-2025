import {
  Component,
  ChangeDetectionStrategy,
  signal,
  output,
  computed,
} from '@angular/core';

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
      @if (parMessage() !== '') {
        <div class="alert alert-info">
          @switch (parMessage()) {
            @case ('at') {
              <p>You are at par!</p>
            }
            @case ('close') {
              <p>Getting close to par, good luck!</p>
            }
            @case ('over') {
              <p>Uh, maybe rethink your hobby</p>
            }
          }
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class GolfScoreComponent {
  currentScore = signal(0); // state

  scoreChanged = output<number>();

  addStroke() {
    // this.currentScore.set(this.currentScore() + 1); // changeable
    this.currentScore.update((c) => c + 1);
    // hey, update the dom wherever the currentScore is shown now.
    this.scoreChanged.emit(this.currentScore());
  }

  parMessage = computed(() => {
    const score = this.currentScore();
    const par = 4;

    if (score === par) {
      return 'at';
    }
    if (score > par) {
      return 'over';
    }
    if (par - score === 1) {
      return 'close';
    }
    return '';
  });
}
