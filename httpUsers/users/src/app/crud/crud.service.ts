  import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url: string ='http://localhost:3000/Users';

  
  http= inject(HttpClient);
  
  
    
  getData(){
    return this.http.get<Iuser[]>(this.base_url);
  }
   
  
}
