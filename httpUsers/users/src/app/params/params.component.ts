import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iusers } from '../users/user';
import { CommonModule } from '@angular/common';
import { UserParamsService } from './user-params.service';

@Component({
  selector: 'app-params',
  imports: [CommonModule],
  templateUrl: './params.component.html',
  styleUrl: './params.component.css'
})
export class ParamsComponent {



  userParamssirvice= inject (UserParamsService)
  
    users: Iusers[]= []
  
    ngOnInit(): void {
      this.onGitUsers();
    }
   users$ = this.userParamssirvice.getUsers();
  onGitUsers(){
    this.userParamssirvice.getUsers().subscribe((users)=>{
      this.users= this.users
    })
  }

  getUserParams(){
  
  }

}
