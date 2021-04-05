import { DataService } from './../../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-charactes-list',
  template: `
  <section class="character__list">
    <app-charactes-card *ngFor="let character of characters$ |async" [character]=character></app-charactes-card>
    <button class="button">⏫</button>
  </section>
  `,
  styleUrls: ['./charactes-list.component.scss']
})
// 🔼⏫⬆
export class CharactesListComponent implements OnInit {
  public characters$= this.dataService.characters$;
  constructor(private dataService:DataService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
  }

}
