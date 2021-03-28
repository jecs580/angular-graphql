import { DataService } from './../../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charactes-list',
  templateUrl: './charactes-list.component.html',
  styleUrls: ['./charactes-list.component.scss']
})
export class CharactesListComponent implements OnInit {
  public characters$= this.dataService.characters$;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    
  }

}
