import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  myapidata:any;
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.myhttp.get('https://reqres.in/api/users?page=2')
      .subscribe(
        (mydata) => { this.myapidata = mydata }
      );
  }

}
