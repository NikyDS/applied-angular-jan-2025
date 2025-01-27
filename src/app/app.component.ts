import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [NavigationComponent, RouterOutlet],
})
export class AppComponent {}
