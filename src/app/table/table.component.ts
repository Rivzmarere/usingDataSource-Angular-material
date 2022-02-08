import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(res =>{
      console.log(res)
    })
  }

}
