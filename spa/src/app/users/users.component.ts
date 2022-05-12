import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  name: string;
  dob: {
    age: string;
  };
  email: string;
  age: string;
  phone: string;
  picture: string;
}

export interface pageEvents{
  pageIndex: string;
  pageSize: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'gender', 'location', 'email', 'dob.age', 'registration', 'phone', 'picture'];
  dataSource: any = new MatTableDataSource();
  apiUrl: string = "";
  pageConfig: any = {} as PageEvent;
  teste2: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngAfterViewInit() {    
    this.getUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pageChange(event: any) {
    event = event as pageEvents;

    this.pageConfig.pageIndex = event.pageIndex;
    this.pageConfig.pageSize = event.pageSize;

    this.getUsers();
  }

  getUsers(){
    this.apiUrl = "https://randomuser.me/api/?inc=gender,name,location,email,dob,registered,phone,picture&results=100&seed=abc&"

    this.pageConfig ? this.apiUrl = this.apiUrl+"?page="+this.pageConfig.pageIndex : null

    this.httpClient.get(this.apiUrl).subscribe((response:any) => {
      this.teste2 =  response.results;
      this.dataSource = new MatTableDataSource(this.teste2);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
    )

  }

  csv(){
    console.log("csv")
  }

  xml(){
    console.log("xml")

    return this.httpClient.get("https://randomuser.me/api/?format=csv&dl").subscribe( response => 
      console.log("response: ", response)
    )
  }
}
