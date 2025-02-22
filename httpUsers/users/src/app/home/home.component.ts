import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iusers } from '../users/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    userservice = inject (UserService)
  
    users: Iusers[]= []

    constructor(){
      this.userservice.getUsers().subscribe({
    next:(data)=>{
      this.users = data;
    },
    error:(err)=>{
 console.log(err);
    }
      });
    }
  
 /*    ngOnInit(): void {
      this.onGitUsers();
    } */
   users$ = this.userservice.getUsers();
  onGitUsers(){
    this.userservice.getUsers().subscribe((Iusers)=>{
      this.users= this.users
    })
  }

}
