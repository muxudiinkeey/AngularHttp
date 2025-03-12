import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'users' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'addUser', component: AddUserComponent },
    { path: 'getUser', component: GetUserComponent },
    { path: 'crud', component: CrudComponent },

    { path: 'updateUser', component: UpdateUserComponent},
    { path: 'viewUser', component: ViewUserComponent},
];
