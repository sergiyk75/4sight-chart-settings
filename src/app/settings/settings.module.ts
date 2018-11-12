import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTreeModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { SettingsComponent } from './settings.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [SettingsComponent, SearchComponent, ViewComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatTreeModule, MatInputModule, MatFormFieldModule,
  ],
})
export class SettingsModule { }
