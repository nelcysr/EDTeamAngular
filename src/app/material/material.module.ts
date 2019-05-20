import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import {
  MatToolbarModule, 
  MatButtonModule,
  MatIconModule,
  MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [MaterialDemoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
