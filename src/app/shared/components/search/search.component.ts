import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = new FormControl('')
  constructor(private dataService:DataService) {
    this.search.valueChanges
    .pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(100), // Establece un retardo de T segundos por peticion
      distinctUntilChanged(),
      filter(search => search!=='' && search?.length>2),
      tap((search) => this.dataService.filterData(search))
      )
    .subscribe()
   } 

  ngOnInit(): void {
  }

}
