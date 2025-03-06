import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../users/user';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

homeService = inject (HomeService)

 // users: Iuser[]= []  
  private user: Iuser = {
    'id': 1,
    'name': 'Axmed',

    'email': 'ahmed@april.biz',
    username: 'mohamoud'
  }
    
 
  

  ngOnInit(): void {
    this.onGetusers();
    //this.onGetuser();
    this.onCreateUser();
  }


  onGetusers(){
   return this.homeService.getUsers().subscribe(
      (response) => console.table(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }

      
  onGetuser(){
  return this.homeService.getUser().subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }
  onCreateUser(){
  return this.homeService.createUser(this.user).subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waxaa lagudaray ha user --createdUse id wuxuu noqonayaa 11' )
    )
  }

 
   






















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
  
  


