import { Component, inject } from '@angular/core';
import { Iuser } from '../users/user';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
apiData: Iuser[]=[]
  
crud= inject (CrudService);
router = inject(Router)


 ngOnInit(): void {
this.getAllData();

 };

 getAllData(){
  this.crud.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
} 

addNewUser(){
  this.router.navigateByUrl('addUserList');
}
}
