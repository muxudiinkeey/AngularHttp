import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Iusers } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  
  userservice = inject (UserService)

  users: Iusers[]= []

  ngOnInit(): void {
    this.onGitUsers();
  }
 users$ = this.userservice.getUsers();
onGitUsers(){
  this.userservice.getUsers().subscribe((Iusers)=>{
    this.users= this.users
  })
}

}
