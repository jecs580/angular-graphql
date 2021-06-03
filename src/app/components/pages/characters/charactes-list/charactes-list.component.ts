import { DataService } from './../../../../shared/services/data.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/shared/services/localStorage.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-charactes-list',
  template: `
  <app-search></app-search>
  <section class="character__list"
    infiniteScroll
    (scrolled)="onScrollDown()"
  >
  <ng-container *ngIf="characters$ |async as characters; else showEmpty">
    <app-charactes-card *ngFor="let character of characters" [character]=character></app-charactes-card>
  </ng-container>
  <ng-template #showEmpty>
    <div>
      <h1>No hay resultados</h1>
      <img src="assets/imgs/404.jpeg" alt="404">
    </div>
  </ng-template>
  
    <button class="button" (click)="onScrollTop()" *ngIf="showButton">⏫</button>
  </section>
  `,
  styleUrls: ['./charactes-list.component.scss']
})
// 🔼⏫⬆
export class CharactesListComponent implements OnInit {
  public characters$= this.dataService.characters$;
  showButton =false;
  private scrollHeight=500;
  private pageNum= 1;
  constructor(
    @Inject(DOCUMENT) private document:Document,
    private dataService:DataService) { }

  ngOnInit(): void {
    
  }
  @HostListener('window:scroll')
  onWindowScroll(){
    const yoffSet = window.pageYOffset;  // Numero de pixeles que se desplaza verticalmente
    const scrollTop = this.document.documentElement.scrollTop // Numero de pixeles que se desplaza verticalmente
    this.showButton=(yoffSet|| scrollTop)>this.scrollHeight;
  }
  onScrollTop(){
    this.document.documentElement.scrollTop=0;
  }
  onScrollDown(){
    this.pageNum +=1;
    this.dataService.getCharactersByPage(this.pageNum);
    console.log('Down!!');
    
  }
}
