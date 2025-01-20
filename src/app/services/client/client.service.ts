import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/Client';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../model/interface/apiResponse';
import { environment } from '../../../environments/environment';
import { Constants } from '../../../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private readonly httpclient: HttpClient) {
      
  }

  public getAllClient() : Observable<IApiResponse>{
    return this.httpclient.get<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.GET_ALL_CLIENTS);
  }

  public saveClient(clientObj: Client) : Observable<IApiResponse>{
    return this.httpclient.post<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.ADD_UPDATE_CLIENT, clientObj);
  }

  public deleteClient(clientId : Client["clientId"]) : Observable<IApiResponse>{
    return this.httpclient.delete<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.DELETE_CLIENT_BY_CLIENT_ID + clientId);

  }
  public addUpdateClientProject(clientProjectObj: any) : Observable<IApiResponse>{
    return this.httpclient.post<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, clientProjectObj);
  }

  public getAllClientProjects() : Observable<IApiResponse>{
    return this.httpclient.get<IApiResponse>(environment.API_BASE_PATH + Constants.API_METHOD.GET_ALL_CLIENT_PROJECTS);
  }
}
