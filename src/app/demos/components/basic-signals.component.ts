import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-basic-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>
      Your Current Score:
      <span>{{ currentScore() }}</span>
    </p>
    <p>
      Your Current Score:
      <span>{{ currentScore() }}</span>
    </p>
    <p></p>

    <div>
      <button (click)="addStroke()" class="btn btn-primary">Took A Shot</button>
    </div>

    @for (animal of animals(); track $index) {
      <div>{{ animal }}</div>
    }

    <div>
      <p>Warning - bad code for a11y. don't judge. we'll cover that later.</p>

      <input
        #newAnimalInput
        type="text"
        class="input input-sm input-bordered"
      />
      <button
        (click)="addAnimal(newAnimalInput.value)"
        class="btn btn-secondary"
      >
        Add Animal
      </button>
      <p>You currently have {{ animalCount() }} animals!</p>
    </div>
  `,
  styles: ``,
})
export class BasicSignalsComponent {
  currentScore = signal(0); // state
  animals = signal(['dog', 'cat', 'mouse']);
  animalCount = computed(() => this.animals().length);

  addAnimal(animalName: string) {
    this.animals.update((currentAnimals) => [animalName, ...currentAnimals]);
  }
  addStroke() {
    // this.currentScore.set(this.currentScore() + 1); // changeable
    this.currentScore.update((c) => c + 1);
    // hey, update the dom wherever the currentScore is shown now.
  }
}
