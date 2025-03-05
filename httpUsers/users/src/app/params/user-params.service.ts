import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser} from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UserParamsService {

 http = inject (HttpClient);
  private Url='https://jsonplaceholder.typicode.com/users';
 
  //users : Iusers [] = []
 
   getUsers(){
    return this.http.get<Iuser[]>(this.Url)
   }
 
}
