import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpadreComponent } from './cpadre/cpadre.component';
import { ChijoComponent } from './chijo/chijo.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CpadreComponent,
    ChijoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports:[
    CpadreComponent,
    ChijoComponent
  ]
})
export class PrincipalModule { }
