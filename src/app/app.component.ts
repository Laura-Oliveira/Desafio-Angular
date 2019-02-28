import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { RestService } from './rest.service';
import { Comic } from './comic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true
})
export class AppComponent implements OnInit
{
  comics:Comic[];

  title = 'Quadrinhos Marvel';
  constructor(private service:RestService){}

  ngOnInit()
  {
    this.service.list().subscribe(dados => this.comics = dados);
  }
}
