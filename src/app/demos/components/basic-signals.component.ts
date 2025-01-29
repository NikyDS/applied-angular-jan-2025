import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { GolfScoreComponent } from './golf-score.component';
import { AnimalListComponent } from './animal-list.component';
import { AddAnimalComponent } from './add-animal.component';
import { SummaryComponent } from './summary.component';

@Component({
  selector: 'app-basic-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GolfScoreComponent,
    AnimalListComponent,
    AddAnimalComponent,
    SummaryComponent,
  ],
  template: `
    <app-summary
      [animalCount]="animalCount()"
      [golfScore]="currentScore()"
      message="Just a Hardcoded String"
    />

    <div>
      <h2 class="text-2xl">Golfing!</h2>
      <app-golf-score (scoreChanged)="currentScore.set($event)" />

      <app-animal-list [list]="animals()" />
      <app-add-animal (animalAdded)="addAnimal($event)" />
    </div>
  `,
  styles: ``,
})
export class BasicSignalsComponent {
  animals = signal(['Bird', 'Goat', 'Deer']);

  currentScore = signal(0);
  // animalCount = computed(() => this.animals().length);
  addAnimal(animalName: string) {
    this.animals.update((currentAnimals) => [animalName, ...currentAnimals]);
  }

  animalCount = computed(() => this.animals().length);
}
