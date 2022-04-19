import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    console.log(this.loginForm.value);
    /* if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
      this.router.navigate(['/home']);
    } */
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
      console.log(data);
      this.router.navigate(['/home']);
    });
  };

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

}
