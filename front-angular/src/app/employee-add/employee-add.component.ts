import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service'

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeesService) {
    this.createForm()
   }

   createForm(): void{
    this.employeeForm = this.formBuilder.group({
      name: ["", Validators.required],
      job_role: ["", Validators.required],
      salary: ["", Validators.required],
      date_birthday: ["", Validators.required],
      employee_registration: ["", Validators.required]
    })
   }

  createNewEmployee(name: any, job_role: any, salary: any, date_birthday: any, employee_registration: any){
    this.employeeService.createNewEmployee(name, job_role, salary, date_birthday, employee_registration)
  }

  ngOnInit(): void {
  }

}
