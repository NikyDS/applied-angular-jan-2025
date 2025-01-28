import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { GolfScoreComponent } from './golf-score.component';
import { AnimalListComponent } from './animal-list.component';
import { AddAnimalComponent } from './add-animal.component';

@Component({
  selector: 'app-basic-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GolfScoreComponent, AnimalListComponent, AddAnimalComponent],
  template: `
    <div>
      <h2 class="text-2xl">Golfing!</h2>
      <app-golf-score />

      <app-animal-list [list]="animals()" />
      <app-add-animal (animalAdded)="addAnimal($event)" />
    </div>
  `,
  styles: ``,
})
export class BasicSignalsComponent {
  animals = signal(['Bird', 'Goat', 'Deer']);
  // animalCount = computed(() => this.animals().length);
  addAnimal(animalName: string) {
    this.animals.update((currentAnimals) => [animalName, ...currentAnimals]);
  }
}
