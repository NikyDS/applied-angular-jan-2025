import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

type CounterState = {
  counterValue: number;
  currentValue: number;
};

export const CounterStore = signalStore(
  withState<CounterState>({
    currentValue: 0,
    counterValue: 1,
  }),
  withMethods((store) => {
    return {
      increment: () =>
        patchState(store, {
          currentValue: store.currentValue() + store.counterValue(),
        }),
      decrement: () =>
        patchState(store, {
          currentValue: store.currentValue() - store.counterValue(),
        }),
      incrementBy1: () => patchState(store, { counterValue: 1 }),
      incrementBy3: () => patchState(store, { counterValue: 3 }),
      incrementBy5: () => patchState(store, { counterValue: 5 }),
    };
  }),
  withComputed((store) => {
    return {
      noNegatives: computed(
        () => store.currentValue() - store.counterValue() < 0,
      ),
      fizzBuzzMessage: computed(() => {
        const value = store.currentValue();
        const fizz = 3;
        const buzz = 5;
        const fizzBuzz = fizz * buzz;

        if (value === 0) {
          return '';
        }
        if (value % fizz === 0 && value % buzz !== 0) {
          return 'fizz';
        }
        if (value % buzz === 0 && value % fizz !== 0) {
          return 'buzz';
        }
        if (value % fizzBuzz === 0) {
          return 'fizzbuzz';
        }
        return '';
      }),
    };
  }),
  withHooks({
    onInit(store) {
      console.log('The Counter Store Has been Created');
      const savedState = localStorage.getItem('counter-state');
      if (savedState !== null) {
        const state = JSON.parse(savedState) as unknown as CounterState;
        patchState(store, state);
      }
      watchState(store, (state) => {
        localStorage.setItem('counter-state', JSON.stringify(state));
      });
    },
    onDestroy(store) {
      console.log('The Counter Store has been DESTROYED');
    },
  }),
);
