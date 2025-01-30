import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsItemCreateModel, ResourceStore } from '../services/resource.store';
import { FormModelMapper } from '@shared';

@Component({
  selector: 'app-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <form class="w-1/3" [formGroup]="form" (ngSubmit)="addThisThing()">
      <div class="form-control">
        <label for="title" class="label"
          >Title
          <input
            formControlName="title"
            type="text"
            class="input input-bordered"
            name="title"
          />
        </label>
        @let titleControl = form.controls.title;
        @if (
          titleControl.errors && (titleControl.touched || titleControl.dirty)
        ) {
          <div class="alert alert-warning">
            @if (titleControl.hasError('required')) {
              <p>This is required</p>
            }
            @if (titleControl.hasError('maxlength')) {
              <p>This is too darned long.</p>
            }
          </div>
        }
      </div>
      <div class="form-control">
        <label for="link" class="label"
          >Link
          <input
            formControlName="link"
            type="url"
            class="input input-bordered"
            name="link"
          />
        </label>
      </div>
      <div class="form-control">
        <label for="description" class="label"
          >Description
          <textarea
            formControlName="description"
            type="text"
            class="input input-bordered"
            name="title"
          ></textarea>
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Add News Item</button>
    </form>
  `,
  styles: ``,
})
export class CreateComponent {
  store = inject(ResourceStore);
  form = new FormGroup<FormModelMapper<NewsItemCreateModel>>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)],
    }),
    link: new FormControl('', { nonNullable: true, validators: [] }),
    description: new FormControl('', { nonNullable: true }),
  });

  addThisThing() {
    // send it to the service, or store or whatever, if it is valid
    if (this.form.valid) {
      const newItem = this.form.getRawValue();
      this.store.addNewsItem(newItem);
      this.form.reset();
    } else {
      console.log('has errors, bro.');
    }
  }
}
