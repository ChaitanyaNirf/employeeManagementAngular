import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { 
    
  }

  getDesignations():Observable<IApiResponse>{
    return this.http.get<IApiResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }
}
