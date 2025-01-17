import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee/employee.service';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../../model/interface/employee';
import { IApiResponse } from '../../model/interface/apiResponse';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../model/class/Client';
import { IClientProject } from '../../model/interface/clientProject';

@Component({
  selector: 'app-client-project',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  // private readonly employeeService;
  // private readonly clientService;
  employeeList: IEmployee[] = [];
  clientList: Client[] = [];
  clientProjectList: IClientProject[] = [];
  //can create an constructor and pass it as well no issues
  httpClient = inject(HttpClient);
  employeeService = inject(EmployeeService);
  clientService = inject(ClientService);

  // constructor() {
  //   this.employeeService = new EmployeeService(this.httpClient);
  //   this.clientService = new ClientService(this.httpClient);
  // }


  ngOnInit(): void {
    try {
      this.getAllEmployees();
      this.getAllCLients();
      this.getAllClientProjects();
    } catch (error) {
      console.log("Failed to load data");
    }
  }

  
  getAllClientProjects() {
    //load client projects
    this.clientService.getAllClientProjects().subscribe((res) => {
      if(res.result && res.data){
        this.clientProjectList = res.data;
      }
    })
  }

  getAllEmployees() {
    //load all clients
    this.employeeService.getAllEmployees().subscribe((res: IApiResponse) => {
      this.employeeList = res.data;
    })
  }

  getAllCLients() {
    //load all clients
    this.clientService.getAllClient().subscribe((res: IApiResponse) => {
      this.clientList = res.data;
    })
  }

  onSubmit(){
    //this is invoked when a button with type submit is invoked
    console.log(JSON.stringify(this.projectForm.value));
    this.clientService.addUpdateClientProject(this.projectForm.value).subscribe((res: IApiResponse) => {
      if(res.result){
        alert("Successfully saved the client project")
      }else{
        alert(res.message);
      }
      this.projectForm.reset();
    })
  }

  //Reactive form
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("New Project", [Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(new Date()),
    expectedEndDate: new FormControl(new Date()),
    leadByEmpId: new FormControl(0),
    completeDate: new FormControl(new Date()),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(0)
  });
}
