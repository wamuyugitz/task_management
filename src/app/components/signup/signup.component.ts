import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.username ||
      !this.password ||
      !this.confirmPassword
    ) {
      alert('Please fill all fields');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
    };

    this.authService.signup(userData).subscribe(
      (response: any) => {
        console.log('Signup successful', response);
        alert('Account Created!');
        this.router.navigate(['/login']); // Redirect to login after signup
      },
      (error: any) => {
        console.error('Signup failed', error);
        alert('Signup failed, try again.');
      }
    ); 

    console.log(
      'User signed up with:',
      this.firstName,
      this.lastName,
      this.email,
      this.username
    );
  }
} 
