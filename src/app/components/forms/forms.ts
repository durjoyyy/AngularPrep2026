import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  //template driven
  name = signal('');
  email = signal('');

  submitForm() {
    console.log(`Name: ${this.name()}, Email: ${this.email()} `);
  }

  //reactive
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });

    this.form.valueChanges.subscribe((val: any) => {
      this.userSignal.set(val);
    });
  }
  form: any;
  userSignal = signal({ name: '', email: '' });
  submitFormReactive() {
    console.log(`Name: ${this.userSignal().name}, 
    Email: ${this.userSignal().email} `);
  }
}
