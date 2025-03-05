import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Iuser} from '../users/user';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user: any;
  Users : Iuser[]=[]
  homeService = inject(HomeService)
 
 ngOnInit(): void {
 /*     this.onGetusers();
     this.onGetuser();
      */
 }
 
   onGetusers(){
     this.homeService.getUsers().subscribe(
       (response) => console.table(response),
       
       (error:any) =>console.warn(error),
       ()=> console.log('liiska oo dhan users')
     )
   }
   onGetuser(){
     this.homeService.getUser().subscribe(
       (response) => console.info(response),
       (error:any) =>console.warn(error),
       ()=> console.log('Waa hal user')
     )
   }
   onCreateUsser(user: Iuser){
     this.homeService.createUser(this.user).subscribe(
       (Users) => console.table(Users),
       (error:any) =>console.warn(error),
       ()=> console.log('Done creating user')
     )
   }
   onUpdateUsser(user: Iuser){
     this.homeService.updateUser(this.user).subscribe(
       (Users) => console.table(Users),
       (error:any) =>console.warn(error),
       ()=> console.log('Done creating user')
     )
   }




















/* 
    userservice = inject (UserService)
  
    users: Iuser[]= []

    constructor(){}
  ngOnInit(): void {
    this.onGetusers();
  }

    onGetusers(){
      this.userservice.getUsers().subscribe({
    next:(data)=>{
      this.users = data;
    },
    error:(err: any)=>{
 console.log(err);
    }
      });
    }
   */
  
  }


