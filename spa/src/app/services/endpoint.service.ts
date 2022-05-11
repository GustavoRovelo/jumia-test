import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface pageConfig{
  pageIndex: string;
  pageSize: string;
}

@Injectable({
  providedIn: 'root'
})

export class EndpointService {
  apiUrl: string = "";

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(pageConfig?: pageConfig, config?: any ){
    let teste;
    this.apiUrl = "https://randomuser.me/api/?inc=gender,name,location,email,dob,registered,phone,picture&"

    pageConfig ? this.apiUrl = this.apiUrl+"?page="+pageConfig.pageIndex+"&results="+pageConfig.pageSize : null

    this.httpClient.get(this.apiUrl).subscribe((response) => {
      console.log("response: ", response)
      }
    )
  }
}
