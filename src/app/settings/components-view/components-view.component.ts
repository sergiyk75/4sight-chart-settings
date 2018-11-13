import { Component, OnInit, Injectable } from '@angular/core';
import { SettingsService } from '../settings.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ComponentCategory } from '../shared/component-category';

@Component({
  selector: 'app-view',
  templateUrl: './components-view.component.html',
  styleUrls: ['./components-view.component.scss']
})
export class ComponentsViewComponent implements OnInit {
  categories: ComponentCategory[];

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingsService.getComponentCategories()
      .subscribe(categories => this.categories = categories);
  }
}
