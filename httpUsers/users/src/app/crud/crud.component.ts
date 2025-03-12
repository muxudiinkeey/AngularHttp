import { Component, inject } from '@angular/core';
import { Iuser } from '../users/user';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
apiData: Iuser[]=[]
  
crudService= inject (CrudService);



 ngOnInit(): void {
this.getAllData();

 };

 getAllData(){
  this.crudService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
} 
}
