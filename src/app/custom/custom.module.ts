import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { CustomRoutingModule } from './custom.routing';



@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ]
})
export class CustomModule { }
