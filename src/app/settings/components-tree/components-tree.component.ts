import { Component, OnInit, Input } from '@angular/core';
import { ComponentItem } from '../shared/component-item';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

@Component({
  selector: 'app-components-tree',
  templateUrl: './components-tree.component.html',
  styleUrls: ['./components-tree.component.scss']
})
export class ComponentsTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<ComponentItem>((item) => item.components);
  dataSource = new MatTreeNestedDataSource();

  constructor() {}

  ngOnInit() {}

  @Input()
  set items(items: ComponentItem[]) {
    this.dataSource.data = items;
  }

  hasNestedItems = (_: number, item: ComponentItem) => item.components;
}
