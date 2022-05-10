import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // @Input op: string;
  
  constructor(
    private router: Router
  ){}

  ngOnInit(){
    console.log('started');
  }
}