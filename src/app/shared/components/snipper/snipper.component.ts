import { SnipperService } from './../../services/spinner.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-snipper',
  templateUrl: './snipper.component.html',
  styleUrls: ['./snipper.component.scss']
})
export class SnipperComponent {

  constructor(private snipperService:SnipperService) { }
  isLoading$ = this.snipperService.isLoading$;
  ngOnInit(): void {
  }

}
