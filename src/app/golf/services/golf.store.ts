import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export const GolfStore = signalStore(
  withState({
    score: 0,
  }),
  withMethods((store) => {
    return {
      takeAStroke: () => patchState(store, { score: store.score() + 1 }),
      removeStroke: () => patchState(store, { score: store.score() - 1 }),
    };
  }),
  withComputed((store) => {
    return {
      removeStrokeDisabled: computed(() => store.score() === 0),
    };
  }),
);
