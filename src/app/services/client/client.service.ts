import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/Client';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../model/interface/apiResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private readonly httpclient: HttpClient) {
      
  }

  public getAllClient() : Observable<IApiResponse>{
    return this.httpclient.get<IApiResponse>(environment.API_BASE_PATH + "GetAllClients");
  }

  public saveClient(clientObj: Client) : Observable<IApiResponse>{
    return this.httpclient.post<IApiResponse>(environment.API_BASE_PATH + "AddUpdateClient", clientObj);
  }

  public deleteClient(clientId : Client["clientId"]) : Observable<IApiResponse>{
    return this.httpclient.delete<IApiResponse>(environment.API_BASE_PATH + "DeleteClientByClientId?clientId=" + clientId);

  }
  public addUpdateClientProject(clientProjectObj: any) : Observable<IApiResponse>{
    return this.httpclient.post<IApiResponse>(environment.API_BASE_PATH + "AddUpdateClientProject", clientProjectObj);
  }
}
