import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iuser } from '../users/user';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserServiceService } from './add-user-service.service';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

addUserService = inject (AddUserServiceService)
userService = inject (UserService)

 userForm = new FormGroup({

  name : new FormControl(''),
  userName : new FormControl(''),
  email : new FormControl('')
 });
  users: Iuser[]= []
  Iusers: Iuser[]=[];
   
  ngOnInit(): void {
    
    
    
    
   // this.onGitUser();
  }
  // asynk hadaad isticmaalaysid dollor users isticmaal
   users$ = this.userService.getUsers();


}
/* onGitUser(){
  this.addUserService.getUser().subscribe((Iuser)=>{

    this.users= this.users
    //this.users= Iuser;
    console.log(this.users);
  })
} */

 
  
//console.log(this.userForm.value);


 
