import { Component, OnInit,inject } from '@angular/core';
import { Iuser } from '../users/user';
import { AddUserListService } from './add-user-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user-list',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user-list.component.html',
  styleUrl: './add-user-list.component.css'
})
export class AddUserListComponent implements OnInit{
apiData: Iuser[]=[]
  addUserForm : FormGroup;
    AddUserListService= inject (AddUserListService);

 constructor(private router: Router, private fb: FormBuilder){
this.addUserForm = this.fb.group({
    name : [''],
    username : [''],
    email : [''],
  })
 }

 onSubmit(){
  console.table(this.addUserForm.value);
}

 ngOnInit(): void {
this.getAllData();

 };

 getAllData(){
  return this.AddUserListService.getData().subscribe(res =>{
 this.apiData = res;
 console.table(this.apiData)
  })
} 

User(){  
this.router.navigateByUrl('addUserList')
} 
onCancel(){
  this.router.navigateByUrl('crud')
}

}
