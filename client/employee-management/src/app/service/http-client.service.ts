import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


export class Employee{
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getEmployees() {
    let username = 'pennyyi'
    let password = 'rudqls9700!'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>('/employees', {headers});
  }

  public deletedEmployee(employee) {
    let username = 'pennyyi'
    let password = 'rudqls9700!'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("/employees" + "/"+ employee.empId,{headers});
  }

  public createEmployee(employee) {
    let username = 'pennyyi'
    let password = 'rudqls9700!'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("/employees", employee, {headers});
  }
}
