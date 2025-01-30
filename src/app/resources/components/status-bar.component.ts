import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
} from '@angular/core';
import { ResourceStore } from '../services/resource.store';

@Component({
  selector: 'app-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total News Items</div>
        <div class="stat-value">{{ store.newsItemCount() }}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Pending News Items</div>
        <div class="stat-value">{{ store.newsItemPendingCount() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class StatusBarComponent {
  //totalNewsItems = input.required<number>();
  store = inject(ResourceStore);
}
