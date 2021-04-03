import { LocalStorageService } from '@app/shared/services/localStorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }
  charactersFav$= this.localStorageService.charactersFav$;
  ngOnInit(): void {
  }

}
