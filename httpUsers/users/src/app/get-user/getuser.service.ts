import { HttpClient } from '@angular/common/http';
import { Injectable , inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  Url = ('https://jsonplaceholder.typicode.com/users/')
  
  http= inject(HttpClient);

getuser(){
 
  return this.http.get(this.Url)
}

}
