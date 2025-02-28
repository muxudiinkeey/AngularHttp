import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iusers } from '../users/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

    userservice = inject (UserService)
  
    users: Iusers[]= []

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
  
  
  }


