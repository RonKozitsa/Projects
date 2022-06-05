import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoreItemInterface } from '../../shared/components/store-item/store-item.interface';
import { childrenPaintings } from '../page-items/children-page.consts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-online-shop-page',
  templateUrl: './online-shop-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlineShopPageComponent implements OnInit {
  gridItems: StoreItemInterface[] = childrenPaintings;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.gridItems = Object.values(this.activatedRoute.snapshot.data) as StoreItemInterface[];
  }
}
