import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EndpointService } from '../services/endpoint.service';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  name: string;
  gender: string;
  email: string;
  age: string;
  phone: string;
  picture: string;
}

export interface pageEvents{
  pageIndex: string;
  pageSize: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'gender', 'location', 'email', 'age', 'registration', 'phone', 'picture'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private endpointService: EndpointService,
    private httpClient: HttpClient
  ) {
    // Create 100 users
    // const users = Array.from({length: 50}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    
    let page = {} as pageEvents;
    page.pageIndex = "0"
    page.pageSize = "5"
    
    let users = this.endpointService.getUsers(page);

    console.log('users: ', users)

    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    console.log("filtro: ", this.dataSource)
  }

  pageChange(event: any) {
    let page = {} as pageEvents;
    event = event as pageEvents;

    page.pageIndex = event.pageIndex;
    page.pageSize = event.pageSize;

    this.endpointService.getUsers(page);
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

// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 50).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
