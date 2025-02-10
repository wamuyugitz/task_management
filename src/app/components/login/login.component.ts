import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      console.log('Logging in with:', this.username, this.password);
      // authentication logic here
      this.router.navigate(['/dashboard']); // Redirect to dashboard after login
    } else {
      alert('Please enter username and password');
    }
  }
}
