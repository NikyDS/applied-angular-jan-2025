import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total News Items</div>
        <div class="stat-value">{{ totalNewsItems() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatusBarComponent {
  totalNewsItems = input.required<number>();
}
