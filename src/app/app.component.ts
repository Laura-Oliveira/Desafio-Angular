//import { Component, OnInit, Injectable } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
//import { RestService } from './rest.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})


export class AppComponent implements OnInit{
  
  ngOnInit() {
    
  }
}

  