import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../model/interface/apiResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly httpClient: HttpClient) { 

  }

  public getAllEmployees() : Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(environment.API_BASE_PATH + "GetAllEmployee");
   }
}
