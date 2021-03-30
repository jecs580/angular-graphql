import { DataService } from './../../../shared/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes$ = this.dataService.episodes$;
  constructor(private dataService:DataService ) { }

  ngOnInit(): void {
  }

}
