import { Component,inject, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { UserService } from './users/user.service';
import { Iuser } from './users/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'users';
userService = inject(UserService)
  user: any;
 Users : Iuser[]=[]


ngOnInit(): void {
    this.onGetusers();
    this.onGetuser();
    
}

  onGetusers(){
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      
      (error:any) =>console.warn(error),
      ()=> console.log('liiska oo dhan users')
    )
  }
  onGetuser(){
    this.userService.getUser().subscribe(
      (response) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }
  onCreateUsser(user: Iuser){
    this.userService.createUser(this.user).subscribe(
      (Users) => console.table(Users),
      (error:any) =>console.warn(error),
      ()=> console.log('Done creating user')
    )
  }
  onUpdateUsser(user: Iuser){
    this.userService.updateUser(this.user).subscribe(
      (Users) => console.table(Users),
      (error:any) =>console.warn(error),
      ()=> console.log('Done creating user')
    )
  }
}
