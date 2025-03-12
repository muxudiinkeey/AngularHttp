import { Component, inject } from '@angular/core';
import { Iuser } from '../users/user';
import { CrudService } from '../crud/crud.service';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
apiData: Iuser[]=[]
  
crusService = inject (CrudService);



 ngOnInit(): void {
this.getAllData();

 };

 getAllData(){
  this.crusService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
} 

}
