import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
// import { BookTestComponent } from './books/book-test/book-test.component';
import { BookCardComponent } from './shared/books/book-card/book-card.component';
import { BookCatalogComponent } from './shared/books/book-catalog/book-catalog.component';
import { NewBookComponent } from './shared/books/new-book/new-book.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
    // component: BookCatalogComponent
  },
  {
    path: 'add',
    component: NewBookComponent
  },
  // {
  //   path: 'book-card',
  //   component: BookCardComponent
  // },
  // {
  //   path: 'book-test',
  //   component: BookTestComponent
  // }
  
  {
    path: 'catalog',
    component: BookCatalogComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
