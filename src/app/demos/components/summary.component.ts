import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <p>{{ message() }}</p>
      <p>
        You have {{ animalCount() }} Animals, and Your Score is
        {{ golfScore() }}
      </p>
    </div>
  `,
  styles: ``,
})
export class SummaryComponent {
  animalCount = input.required<number>();

  golfScore = input.required<number>();

  message = input('Your Summary');
}
