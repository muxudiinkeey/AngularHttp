import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUserComponent } from './get-user/get-user.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'addUser', component: AddUserComponent },
    { path: 'GetUser', component: GetUserComponent },
];
