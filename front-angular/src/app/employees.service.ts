import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  createNewEmployee(name: any, job_role: any, salary: any, date_birthday: any, employee_registration: any){
    const employee = {
      name,
      job_role,
      salary,
      date_birthday,
      employee_registration
    }
    console.log(employee);
    this
      .http
      .post(`${this.uri}/employees`, employee)
      .subscribe(res => console.log("Feito"))

  }

  getEmployees(){
    return this
      .http
      .get(`${this.uri}/employees`);
  }

  // deleteEmployee(employee_id:any){
  //   return this
  //     .http
  //     .delete(`${this.uri}/employees/:${employee_id}`)
  // }
}
