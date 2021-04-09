import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnipperComponent } from './snipper.component';



@NgModule({
  declarations: [SnipperComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SnipperComponent
  ]
})
export class SnipperModule { }
