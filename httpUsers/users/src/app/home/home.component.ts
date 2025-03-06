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

  users: Iuser[]= []
  

  ngOnInit(): void {
    this.onGetusers();
    this.onGetusers();
  }


  onGetusers(){
   return this.homeService.getUsers().subscribe(
      (response) => console.table(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }

      
    
    
  }
  onGetuser(){
  return this.homeService.getUser().subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }

 
   





















function onGetuser() {
  throw new Error('Function not implemented.');
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
  
  


