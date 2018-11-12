import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { ComponentCategory } from '../shared/component-category';

@Component({
  selector: 'app-view',
  templateUrl: './components-view.component.html',
  styleUrls: ['./components-view.component.scss']
})
export class ViewComponent implements OnInit {
  categories: ComponentCategory[];

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.loadSettings();
  }

  private loadSettings() {
    this.settingsService.getComponentCategories()
      .subscribe(categories => this.categories = categories);
  }

}
