import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master/master.service';
import { HttpClient } from '@angular/common/http';
import { IDesignation } from '../../model/interface/designations';
import { CommonModule } from '@angular/common';
import { IApiResponse } from '../../model/interface/apiResponse';
@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  private service;
  designationList : IDesignation[] = [];
  showLoader : boolean = true;
  constructor(private readonly httpClient : HttpClient){
    this.service = new MasterService(httpClient);
  }

  ngOnInit(): void {
    this.service.getDesignations().subscribe((res: IApiResponse) => {
      this.designationList = res.data;
      this.showLoader = false;
    }, error=>{
      console.log(`Error getting designations ${JSON.stringify(error)}`);
      this.showLoader = false;
      alert(`Error getting designations`);
    });
  }






}
