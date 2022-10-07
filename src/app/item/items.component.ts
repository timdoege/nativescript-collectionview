import { Component, OnInit } from '@angular/core'
import { ObservableArray } from '@nativescript/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: ObservableArray<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    let tItems = this.itemService.getItems()
    this.items = new ObservableArray();
    tItems.forEach(x => {
      this.items.push(x);
    });

  }

  public toggleCheck(item: Item) {
    console.log(`Tap tap tap on ${item}`);
    console.dir(item);
    item.name = 'Messi';
    
  }
}
