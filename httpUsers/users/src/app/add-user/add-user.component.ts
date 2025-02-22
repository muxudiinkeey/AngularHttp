import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iusers } from '../users/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
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
