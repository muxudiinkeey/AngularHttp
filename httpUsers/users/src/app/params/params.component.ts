import { Component, inject } from '@angular/core';
import { UserService } from '../users/user.service';
import { Iusers } from '../users/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-params',
  imports: [CommonModule],
  templateUrl: './params.component.html',
  styleUrl: './params.component.css'
})
export class ParamsComponent {



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
