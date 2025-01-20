import { Component, inject, OnInit } from '@angular/core'
import { Client } from '../../model/class/Client'
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../services/client/client.service';
import { IApiResponse } from '../../model/interface/apiResponse';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  //we bind this object to the form
  clientObj : Client = new Client();
  clientList: Client[] = [];

  //can create an constructor and pass it as well no issues
  httpClient = inject(HttpClient);

  private readonly clientService;
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

  saveClient(form : NgForm){
    this.clientService.saveClient(this.clientObj).subscribe((res: IApiResponse) => {
      if(res.result){
        alert("Successfully saved the client");
      }else{
        alert(res.message);
      }
      this.loadClient();
      this.clearClientObject(form);
    })
  }

  updateClient(client : Client){
    //create a shallow copy of the object, so the original client is not updated until saved
    this.clientObj = {...client};
  }


  deleteClient(clientId : number){
    const confirmDelete = confirm("Are you sure you want to delete this client?");
    if(confirmDelete){
      this.clientService.deleteClient(clientId).subscribe((res: IApiResponse) => {
        if(res.result){
          alert("Successfully deleted the client");
        }else{
          alert(res.message);
        }
        this.loadClient();
      })
    }
  }

  public clearClientObject(form: NgForm){
    this.clientObj = new Client();
    form.reset(this.clientObj);
  }

}
