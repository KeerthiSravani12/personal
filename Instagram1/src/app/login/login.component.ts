import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^.+@.+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Logic for authentication
      // If successful
      this.router.navigate(['/homepage']);
    } else {
      // Display an error message
      console.log('Form is invalid');
    }
  }
}
