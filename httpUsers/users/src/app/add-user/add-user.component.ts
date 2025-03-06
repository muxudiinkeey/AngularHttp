import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iuser } from '../users/user';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
addUserService = inject (UserService)
 userForm = new FormGroup({

  name : new FormControl(''),
  userName : new FormControl(''),
  email : new FormControl('')
 });
  users: Iuser[]= []
   
  ngOnInit(): void {
    this.onGitUsers();
  }
  // asynk hadaad isticmaalaysid dollor users isticmaal
   users$ = this.addUserService.getUsers();

onGitUsers(){
  this.addUserService.getUsers().subscribe((Iuser)=>{

    //this.users= this.users
    this.users= Iuser;
  })
}

onAddUser(){
console.log(this.userForm.value);
}
}
