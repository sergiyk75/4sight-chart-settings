import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatTreeModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { SettingsComponent } from './settings.component';
import { SearchComponent } from './search/search.component';
import { ComponentsViewComponent } from './components-view/components-view.component';
import { ComponentSettingsComponent } from './component-settings/component-settings.component';
import { ComponentsTreeComponent } from './components-tree/components-tree.component';

@NgModule({
  declarations: [SettingsComponent, SearchComponent, ComponentsViewComponent, ComponentSettingsComponent, ComponentsTreeComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatTreeModule, MatInputModule, MatFormFieldModule,
  ],
})
export class SettingsModule { }
