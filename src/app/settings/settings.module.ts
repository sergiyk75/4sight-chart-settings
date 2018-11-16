import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SearchComponent } from './search/search.component';
import { ComponentsViewComponent } from './components-view/components-view.component';
import { ComponentSettingsComponent } from './component-settings/component-settings.component';
import { ComponentsTreeComponent } from './components-tree/components-tree.component';
import { MaterialModule } from '../material-module.module';

@NgModule({
  declarations: [SettingsComponent, SearchComponent, ComponentsViewComponent, ComponentSettingsComponent, ComponentsTreeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class SettingsModule { }
