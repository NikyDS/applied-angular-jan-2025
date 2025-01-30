// Barrel pattern.

import { FormControl } from '@angular/forms';

export * from './routing/';
export * from './feature-management';

export type FormModelMapper<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};
