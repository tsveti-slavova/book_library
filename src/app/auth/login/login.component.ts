import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   
  constructor(
    private fb:FormBuilder, 
    private router: Router,
    private httpClient: HttpClient, 
    private matSnackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin() {
    console.log(this.loginForm.value);

    this.httpClient
    .post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`, 
    {...this.loginForm.value, returnSecureToken: true}
    )
    .subscribe({
      next: () => {
        // console.log(response);
        // this.loginForm.reset();

        this.matSnackBar.open('Login successful!', 'OK', {
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });

        this.router.navigate(['/']);
      },
      error: (error) => {
        let errorMessage = error.error.error.message;

        this.matSnackBar.open('Login failed! ' + errorMessage, 'OK', {
          verticalPosition: 'top',
          horizontalPosition: 'center',
        })
      }
    });
  };

  // get token() {
  //   if(!this.user._tokenExpirationDate || new Date() > this.user._tokenExpirationDate) {
  //     return null;
  //   }
  //   return this.user._token;
  // }



}

