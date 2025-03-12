import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../users/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {


http= inject(HttpClient);

 base_url: string ='http://localhost:3000/Users';

  
getData(){
  return this.http.get<Iuser[]>(this.base_url);
}
 



}
