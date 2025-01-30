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

const BY_VALUES = [1, 3, 5] as const;
export type ByValues = (typeof BY_VALUES)[number];

type CounterState = {
  by: ByValues;
  current: number;
};
export const CounterStore = signalStore(
  withState<CounterState>({
    by: 1,
    current: 0,
  }),
  withMethods((store) => {
    return {
      setBy: (by: ByValues) => patchState(store, { by }),
      increment: () =>
        patchState(store, { current: store.current() + store.by() }),
      decrement: () =>
        patchState(store, { current: store.current() - store.by() }),
    };
  }),
  withComputed((store) => {
    return {
      getByValues: computed(() => BY_VALUES),
      decrementShouldBeDisabled: computed(
        () => store.current() - store.by() <= 0,
      ),
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
