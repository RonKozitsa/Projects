import { Injectable } from '@angular/core';

import { ItemExpandedViewComponent } from '../components/item-expanded-view/item-expanded-view.component';
import { ModalServiceService } from './modal-service.service';
import { ModalSize } from '../interfaces/modal.interface';
import { StoreItemInterface } from '../components/store-item/store-item.interface';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class StoreItemService {
  constructor(private modalServiceService: ModalServiceService) {}

  showItemDetails(itemConfig: StoreItemInterface): void {
    const modalRef: NgbModalRef = this.modalServiceService.open(ItemExpandedViewComponent, ModalSize.xl);
    modalRef.componentInstance.itemConfig = itemConfig;
  }
}
