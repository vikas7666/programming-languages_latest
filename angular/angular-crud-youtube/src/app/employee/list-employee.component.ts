import { Component, OnInit } from '@angular/core';
import{Employee} from '../models/employee.model'
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  employees : Employee[] = [
  {
    id: 1,
    name: 'mark',
    gender: 'Male',
    contactPreference: 'Email',
    email : 'market@gg.com',
    dateofBirth: new Date('10/25/1998'),
    department: 'IT',
    isActive : true,
    photoPath :'assets/images/boy.png' 
  },
  {
    id: 2,
    name: 'mary',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 215214215,
    dateofBirth: new Date('11/20/1998'),
    department: 'IT',
    isActive : true,
    photoPath :'assets/images/girl.png' 
  },
]
  constructor() { }

  ngOnInit() {
  }

}
