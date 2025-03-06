import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Iuser } from '../users/user';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

homeService = inject (HomeService)

 // users: Iuser[]= []  
  private user: Iuser = {
    'id': 5,
    'name': 'Aadan',

    'email': 'adad@april.biz',
    username: 'muuse'
  }
    
 
  

  ngOnInit(): void {
    this.onGetusers();
    this.onGetuser();
   this.onCreateUser();
   this.onUpdateUser();
  }


  onGetusers(){
   return this.homeService.getUsers().subscribe(
      (response) => console.table(response),
      (error:any) =>console.warn(error),
      ()=> console.log('Waa hal user')
    )
  }

      
  onGetuser(){
  return this.homeService.getUser().subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('get user  id 1')
    )
  }
  onCreateUser(){
  return this.homeService.createUser(this.user).subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('add user id 6' )
    )
  }
  onUpdateUser(){
  return this.homeService.updateUser(this.user).subscribe(
      (response: any) => console.info(response),
      (error:any) =>console.warn(error),
      ()=> console.log('updateUser' )
    )
  }

 
 

 
   }

  


