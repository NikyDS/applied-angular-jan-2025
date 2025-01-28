import { Component, ChangeDetectionStrategy, output } from '@angular/core';

@Component({
  selector: 'app-add-animal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
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
    </div>
  `,
  styles: ``,
})
export class AddAnimalComponent {
  animalAdded = output<string>();
  addAnimal(animalName: string) {
    // this.animals?
    // after I've validated all I can.
    this.animalAdded.emit(animalName);
  }
}
