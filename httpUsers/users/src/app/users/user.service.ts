import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iusers } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // http api users 
  http = inject (HttpClient);
 private Url='https://jsonplaceholder.typicode.com/users';

 //users : Iusers [] = []

  getUsers(){
   return this.http.get<Iusers[]>(this.Url)
  }

}
