import { Component, inject, OnInit } from '@angular/core'
import { Client } from '../../model/class/Client'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../services/client/client.service';
import { IApiResponse } from '../../model/interface/apiResponse';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  //we bind this object to the form
  clientObj : Client = new Client();
  clientList: Client[] = [];

  //can create an constructor and pass it as well no issues
  httpClient = inject(HttpClient);

  private clientService;
  constructor(){
    this.clientService = new ClientService(this.httpClient);
  }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(){
    this.clientService.getAllClient().subscribe((res: IApiResponse) => {
      this.clientList = res.data;
    })
  }

  saveClient(){
    this.clientService.saveClient(this.clientObj).subscribe((res: IApiResponse) => {
      if(res.result){
        alert("Successfully saved the client");
      }else{
        alert(res.message);
      }
      this.loadClient();
      this.clearClientObject();
    })
  }

  public clearClientObject(){
    this.clientObj = new Client();
  }

}
