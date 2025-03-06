import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // http api users 
  http = inject (HttpClient);

 private Url='https://jsonplaceholder.typicode.com/users';

 //users : Iusers [] = []

  getUsers(): Observable<Iuser[]>{
   return this.http.get<Iuser[]>(`${this.Url}`);
   
  }
  getUser(): Observable<Iuser>{
   return this.http.get<Iuser>(`${this.Url}/1`);
   
  }
/* createUser(user: Iuser):Observable<Iuser>{
  return this.http.post<Iuser>(`${this.Url}`,user );
}
updateUser(user: Iuser ):Observable<Iuser>{
  return this.http.put<Iuser>(`${this.Url}/${user.id}`, user);
} */

}
    
