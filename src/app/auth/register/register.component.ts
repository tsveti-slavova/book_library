import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading = false;

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    repass: ['', [Validators.required]]
  })

  constructor(
    private fb:FormBuilder,
    private router: Router, 
    private httpClient: HttpClient, 
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);

    this.isLoading = true;

    this.httpClient
      .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`, 
      {...this.registerForm.value, returnSecureToken: true}
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.registerForm.reset();
          this.isLoading = false;

          this.matSnackBar.open('Account created successfully', 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            
          })

          this.router.navigate(['/']);
        },
        error: (error) => {
          let errorMessage = error.error.error.message;
          // console.log(error);
          this.isLoading = false;

          this.matSnackBar.open('Register failed! Email already exists!', 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            

          })
        }
      });
    }
}
