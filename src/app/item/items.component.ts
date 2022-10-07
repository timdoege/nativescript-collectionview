import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  public toggleCheck(item: Item) {
    console.log(`Tap tap tap on ${item}`);
    console.dir(item);
    item.name = 'Messi';
    
  }
}
