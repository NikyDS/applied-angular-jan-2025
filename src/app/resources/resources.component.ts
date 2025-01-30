import {
  ChangeDetectionStrategy,
  Component,
  ResourceStatus,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResourceStore } from './services/resource.store';
import { ResourceDataService } from './services/resource.data';
import { StatusBarComponent } from './components/status-bar.component';

@Component({
  selector: 'app-resources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ResourceStore, ResourceDataService],
  imports: [RouterLink, RouterOutlet, StatusBarComponent],
  template: `
    <div>
      <h2 class="text-2xl text-accent">Resources</h2>
    </div>

    <div class="flex flex-col">
      <div>
        <a class="btn btn-sm btn-primary" routerLink="list">List</a>
        <a class="btn btn-sm btn-primary" routerLink="create">Add</a>
      </div>
      <app-status-bar />
      <div><router-outlet /></div>
    </div>
  `,
  styles: ``,
})
export class ResourcesComponent {
  //totalNewsItems = computed(() => this.newsItems.value().length);
}
