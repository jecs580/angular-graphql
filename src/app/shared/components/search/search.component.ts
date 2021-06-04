import { DataService } from './../../services/data.service';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy{
  search = new FormControl('')
  private destroy$ =  new Subject<unknown>();
  constructor(private dataService:DataService) {
   this.onSearch();
   } 
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete()
  }
  onClear(){
     this.search.reset();
     this.dataService.getDataAPI();
   }
  private onSearch() {
    this.search.valueChanges
    .pipe(
      map(search => search?.toLowerCase().trim()),
      debounceTime(100), // Establece un retardo de T segundos por peticion
      distinctUntilChanged(),
      filter(search => search!=='' && search?.length>2),
      tap((search) => this.dataService.filterData(search)),
      takeUntil(this.destroy$)
      )
    .subscribe()
  }
}
