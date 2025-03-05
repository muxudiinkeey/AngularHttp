import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iuser } from '../users/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

userservice = inject (UserService)

  users: Iuser[]= []

  ngOnInit(): void {
    this.onGitUsers();
  }
  // asynk hadaad isticmaalaysid dollor users isticmaal
   users$ = this.userservice.getUsers();

onGitUsers(){
  this.userservice.getUsers().subscribe((Iuser)=>{

    //this.users= this.users
    this.users= Iuser;
  })
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
  
  


