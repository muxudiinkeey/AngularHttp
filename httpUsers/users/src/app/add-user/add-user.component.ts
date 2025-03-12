import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserService } from './add-user.service';
import { Iuser } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


apiData: Iuser[]=[]
  
addUserService = inject (AddUserService);



 ngOnInit(): void {
this.getAllData();
 };

getAllData(){
  this.addUserService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
}
 
/*  onGetUsers(){
this.addUserService.getUsers().subscribe((user:Iuser[])=>{
this.users = this.users;
})
 } */
}

