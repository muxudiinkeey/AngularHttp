import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Iuser } from './user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  
  userservice = inject (UserService)

  users: Iuser[]= []

  ngOnInit(): void {
    this.onGitUsers();
  }
 users$ = this.userservice.getUsers();
onGitUsers(){
  this.userservice.getUsers().subscribe((Iuser)=>{
    this.users= this.users
  })
}

}
