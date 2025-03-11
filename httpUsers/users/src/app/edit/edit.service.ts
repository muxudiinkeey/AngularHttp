import { inject, Injectable } from '@angular/core';
import { Iuser } from '../users/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EditService {
  private Url = 'https://jsonplaceholder.typicode.com/users';
  http = inject(HttpClient);
  users : Iuser [] = []


  }
