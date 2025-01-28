import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div>
      <a class="link" routerLink="basic-signals">Basic Signals</a>
    </div>
    <router-outlet />
  `,
  styles: ``,
})
export class DemosComponent {}
