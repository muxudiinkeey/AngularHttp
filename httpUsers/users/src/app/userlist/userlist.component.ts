import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  private uerService = inject (UsersService);

  users$ = this.uerService.getUsers();
}
