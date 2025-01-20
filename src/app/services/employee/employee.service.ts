import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../model/interface/apiResponse';
import { environment } from '../../../environments/environment';
import { Constants } from '../../../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly httpClient: HttpClient) { 

  }

  public getAllEmployees() : Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.GET_ALL_EMPLOYEES);
   }
}
