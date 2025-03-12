import { Component, inject, OnInit } from '@angular/core';
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
export class AddUserComponent implements OnInit{

  addUserservice = inject (AddUserService)

  users: Iuser[]= []



  
  ngOnInit(): void {
       this.addUserservice.getUsers().subscribe((res: any) =>{
    this.users = res;
    console.table(res)
      }) 
  }


}

