import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @for (animal of list(); track $index) {
      <div>{{ animal }}</div>
    }
  `,
  styles: ``,
})
export class AnimalListComponent {
  // animals = signal(['dog', 'cat', 'mouse']);

  list = input.required<string[]>();
}
