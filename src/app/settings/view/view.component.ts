import { Component, OnInit } from '@angular/core';
import { CategoryNode } from '../category-node';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  nodes: CategoryNode[];

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.loadSettings();
  }

  private loadSettings() {
    this.settingsService.getSettingCategories()
      .subscribe(categories => this.nodes = categories);
  }

}
