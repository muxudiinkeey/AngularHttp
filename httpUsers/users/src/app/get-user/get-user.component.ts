import { Component, inject, OnInit } from '@angular/core';
import { GetuserService } from './getuser.service';

@Component({
  selector: 'app-get-user',
  imports: [],
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.css'
})
export class GetUserComponent implements OnInit{
  getUserService = inject (GetuserService);
users : any[]= [] ;
ngOnInit(): void {
    this.getUserService.getuser().subscribe((res: any) =>{
  this.users = res;
  console.table(res)
    })
}

}
