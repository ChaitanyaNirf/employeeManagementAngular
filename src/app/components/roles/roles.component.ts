import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { IRole } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';
import { IApiResponse } from '../../model/interface/apiResponse';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {

  roleList: IRole [] = [];
  http = inject(HttpClient);
  
  // old way
  // constructor(private http: HttpClient){

  // }

  ngOnInit(): void {
    //ngOnInit is a lifecycle hook that is called after Angular hs initialized the component's data bound properties
    // alert("Rendered roles");

    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:IApiResponse) => {
      this.roleList = res.data;
    })
  }

  
}

//Practice 
// export class RolesComponent {
  // private str: string;
  // firstName: string = "Chaitanya Nirfarake";
  // version: string = "1.0.0";
  // inputType: string = "checkbox";
  // selectedState: string = '';
  //  msg: string = 'Default Message';

  // constructor() {
  //   this.str = this.firstName;
  // }

  // public showCurrentDate() {
  //   try {
  //     console.log("Hello");
  //     return new Date();
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // public showWelcomeAlert(){
  //   alert("Welcome to my project"); 
  // }

  // public showMessage(message: string){
  //   alert(message);
  // }
// }
