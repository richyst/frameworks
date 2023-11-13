import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    LibraryComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
