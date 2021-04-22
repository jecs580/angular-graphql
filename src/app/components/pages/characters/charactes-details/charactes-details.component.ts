import { DataService } from './../../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-charactes-details',
  templateUrl: './charactes-details.component.html',
  styleUrls: ['./charactes-details.component.scss']
})
export class CharactesDetailsComponent implements OnInit {
  characterId:string;
  character$:Observable<any>;
  constructor(private route: ActivatedRoute, private dataService:DataService) {
    this.route.params.pipe(
      take(1),
      tap(({id})=>this.character$ = this.dataService.getDetails(id))
    ).subscribe();
   }

  ngOnInit(): void {
  }

}
