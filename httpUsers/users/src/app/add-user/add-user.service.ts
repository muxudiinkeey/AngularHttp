import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../users/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private Url = 'https://jsonplaceholder.typicode.com/users';

http= inject(HttpClient);

 
getUsers(): Observable<Iuser[]> {
  return this.http.get<Iuser[]>(`${this.Url}`);
}
  

 



}
