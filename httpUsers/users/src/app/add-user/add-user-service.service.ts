import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class AddUserServiceService {

   // http api users 
   http = inject (HttpClient);
 
  private Url='https://jsonplaceholder.typicode.com/users';
 
  //users : Iusers [] = []
 
   getUsers(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.Url);
    
   }
   getUser(): Observable<Iuser>{
    return this.http.get<Iuser>(`${this.Url}/1`);
    
   }
}
