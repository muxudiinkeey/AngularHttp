 # tilaabo tilaabo qaabka aad-user.
 ----
## AddUserComponen
...................
 ```t
 import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


apiData: Iuser[]=[]
  
addUserService = inject (AddUserService);



 ngOnInit(): void {
this.getAllData();
 };

getAllData(){
  this.addUserService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
}
```
______
addUserService
............................
```t

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserService } from './add-user.service';
import { Iuser } from '../users/user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {


apiData: Iuser[]=[]
  
addUserService = inject (AddUserService);



 ngOnInit(): void {
this.getAllData();
 };

getAllData(){
  this.addUserService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
}
 
/*  onGetUsers(){
this.addUserService.getUsers().subscribe((user:Iuser[])=>{
this.users = this.users;
})
 } */
}
```
_____

```html
<div class="container"> 
<div  class="row">
<div class="col-4">
    <div class="container mt-3">

        <form  >
            <div class="mb-3 mt-3">
                <label  for="Name">Name</label>
                <input type="test" class="form-control"
                 id="name" placeholder="Enter Name"
                  name="Name"
                   formControlName="name">
              </div>
          
          <div class="mb-3">
            <label for="userName">userName</label>
            <input type="text" class="form-control"
             id="userName" 
             placeholder="Enter userName"
              name="UserName"
              formControlName="userName">
          </div>

          <div class="mb-3 mt-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control"
             id="email"
              placeholder="Enter email"
               name="email"
               formControlName="email"
               >
          </div>
          
          <button type="submit" class="btn btn-light"
          
          >Add-User</button>

      <span class="delete-user">
           <button type="submit"
            class="btn btn-light"
            >update-User</button></span>
        </form>
      </div>
      </div>


<div class="col-8">
 <table class="table table-hover">
    <thead>
      <th>id</th>
      <th>name</th>
      <th>UserName</th>
      <th>email</th>
    </thead>
     <tbody> 
       @for (user of apiData; track user.id){ 
     <tr>
        <td>{{ user.id}}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{user.email}}</td>
       
     </tr>
    }  
    </tbody>
  </table> 
</div>
  
</div>
</div>
```
----



