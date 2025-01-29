import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GolfService } from './services/golf.service';

@Component({
  selector: 'app-golf',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  providers: [],
  template: `
    <div class="flex gap-4">
      <a class="link" routerLink="score-hole">Score a Hole</a>
      <a class="link" routerLink="score-sheet">See Your Score Sheet</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class GolfComponent {}
