import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LessonsDataSource } from './tableDataSource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource:LessonsDataSource | undefined
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    // this.service.getAllProducts().subscribe(res =>{
    //   this.dataSource =res
    // })

    this.dataSource = new LessonsDataSource(this.service);

  }

}

