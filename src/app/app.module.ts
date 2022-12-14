import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './auth/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LogoutComponent } from './auth/logout/logout.component';
import { BookCatalogComponent } from './shared/books/book-catalog/book-catalog.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { NewBookComponent } from './shared/books/new-book/new-book.component';
import { MatCardModule } from '@angular/material/card';
import { BookCardComponent } from './shared/books/book-card/book-card.component';
import { HeaderComponent } from './core/header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner/loading-spinner.component';
import { SearchComponent } from './shared/search/search.component';
// import { AuthComponent } from './auth/auth/auth.component';
// import { BookTestComponent } from './books/book-test/book-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    BookCatalogComponent,
    ProfileComponent,
    NewBookComponent,
    BookCardComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    SearchComponent,
    // AuthComponent,
    // BookTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
