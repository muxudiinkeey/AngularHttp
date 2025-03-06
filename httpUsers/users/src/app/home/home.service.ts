import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  //private Url = 'https://jsonplaceholder.typicode.com/users'
 http = inject (HttpClient);
  
 


 getUsers(): Observable<Iuser[]>{

return this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
 }
 
 getUser(): Observable<Iuser>{

return this.http.get<Iuser>('https://jsonplaceholder.typicode.com/users/1');
 }

 createUser(user: Iuser):Observable<Iuser>{
  return this.http.post<Iuser>('https://jsonplaceholder.typicode.com/users ', user);
}
 updateUser(user: Iuser):Observable<Iuser>{
  return this.http.put<Iuser>('https://jsonplaceholder.typicode.com/users/5 ', user);
}

}
