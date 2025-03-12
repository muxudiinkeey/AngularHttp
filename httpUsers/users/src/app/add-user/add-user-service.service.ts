import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../users/user';

@Injectable({
  providedIn: 'root',
})
export class AddUserServiceService {
  
  http = inject(HttpClient);


}
