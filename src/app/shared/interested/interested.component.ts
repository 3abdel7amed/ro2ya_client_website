import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss'],
})
export class InterestedComponent {
  formIsInvalid: boolean = false;

  constructor() {}

  interestedForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  handleInterestedForm(form: FormGroup): void {
    if (form.valid) {
      console.log(form.value);
    } else {
      this.formIsInvalid = true;
    }
  }
}
