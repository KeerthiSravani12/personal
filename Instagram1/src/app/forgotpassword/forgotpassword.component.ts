
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      emailOrUsername: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^[a-zA-Z0-9._%+-]+$/)]]
    });
  }

  get f() {
    return this.forgotpasswordForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.forgotpasswordForm.invalid) {
      return;
    }

    // Handle the form submission logic here
    console.log('Form submitted', this.forgotpasswordForm.value);
  }
}


