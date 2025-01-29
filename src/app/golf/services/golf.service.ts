import { inject, Injectable, signal } from '@angular/core';

// @Injectable({ providedIn: 'root' })
export class GolfService {
  #score = signal(0);

  constructor() {
    console.log('Golf Service Created');
  }

  getScore() {
    return this.#score.asReadonly();
  }

  takeAStroke() {
    this.#score.update((s) => s + 1);
  }

  removeStroke() {
    this.#score.update((s) => s - 1);
  }
}
