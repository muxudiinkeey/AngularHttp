import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  http = inject(HttpClient);

  private Url = 'https://jsonplaceholder.typicode.com/users';

  

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`${this.Url}`);
  }
  
// obserble la aan
/*   Url = ('https://jsonplaceholder.typicode.com/users/')
  
  http= inject(HttpClient);

getuser(){
 
  return this.http.get(this.Url)
} */

}
