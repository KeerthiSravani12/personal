import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  fullName: string = '';
  username: string = '';
  password: string = '';

  onSignup() {
    // Handle the signup logic here
    console.log('Signup form submitted');
    console.log('Email:', this.email);
    console.log('Full Name:', this.fullName);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // this.router.navigate(['/login']);
   
  }
}
