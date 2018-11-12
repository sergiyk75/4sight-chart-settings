import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number/number.component';
import { StringComponent } from './string/string.component';
import { LookupComponent } from './lookup/lookup.component'

@NgModule({
  declarations: [NumberComponent, StringComponent, LookupComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
