import { Component, OnInit } from '@angular/core';
import { Employee, HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getEmployees().subscribe(
      response => {this.employees = response;}
    );
  }
  // handleSuccessfulResponse(response) {
  //   this.employees = response;
  // }

  deleteEmployee(employee: Employee): void{
    this.httpClientService.deletedEmployee(employee)
      .subscribe(data => {
        this.employees = this.employees.filter(u => u !== employee);
        alert("직원이 삭제되었습니다.");
    })
  };
}
