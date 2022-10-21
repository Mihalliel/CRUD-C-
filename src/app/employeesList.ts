import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'employees-list',
  templateUrl: './employeesList.html',
  styleUrls: ['./employeesList.css']
})
export class EmployeesList {
  public employees?: Employee[];
  public employeeFormGroup: FormGroup;
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
    this.getEmployees();

    this.employeeFormGroup = new FormGroup({
      enrollment: new FormControl(),
      name: new FormControl(),
      birthDate: new FormControl(),
      role: new FormControl(),
      scholarship: new FormControl(),
    } as EmployeeControls) as EmployeeFormGroup;
  }

  getEmployees(): void {
    this._http.get<Employee[]>('/employee').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
  }

  createEmployee(employee: Employee): void {
    this._http.post(`/employee/`, employee)
      .subscribe(data => {
        this.getEmployees();
      });
  }

  updateEmployee(employee: Employee): void {
    this._http.put(`/employee/${employee.enrollment}`, employee)
      .subscribe(data => {
        this.getEmployees();
      });
  }

  deleteEmployee(): void {
    this._http.delete(`/employee/${this.employeeFormGroup.value.enrollment}`)
      .subscribe(data => {
        this.getEmployees();
      });
  }

  onCreateSubmit(): void {
    this.createEmployee(this.employeeFormGroup.value);
    this.employeeFormGroup.reset();
  }

  onUpdateSubmit(): void {
    this.updateEmployee(this.employeeFormGroup.value);
    this.employeeFormGroup.reset();
  }

  prepareToUpdate(employee: Employee): void {
    this.employeeFormGroup.setValue(employee);
  }

  title = 'employees-front-end';
}

type EmployeeControls = { [key in keyof Employee]: AbstractControl };
type EmployeeFormGroup = FormGroup & { value: Employee, controls: EmployeeControls };

interface Employee {
  enrollment: string;
  name: string;
  birthDate: Date;
  role: string;
  scholarship: string;
}

