import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

import { StoreItemInterface } from './store-item.interface';
import { StoreItemService } from '../../services/store-item.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemComponent {
  @Input() itemConfig: StoreItemInterface;

  @Output() showFullDetails = new EventEmitter<number>();

  constructor(private storeItemService: StoreItemService) {}

  showDetails() {
    this.storeItemService.showItemDetails(this.itemConfig);
  }
}
