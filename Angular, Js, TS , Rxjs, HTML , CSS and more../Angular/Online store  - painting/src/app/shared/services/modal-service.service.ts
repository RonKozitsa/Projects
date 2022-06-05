import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.modalDialogClass = 'modal-dialog-centered';
  }

  open(content, modalSize?: string): NgbModalRef {
    return this.modalService.open(content, { size: modalSize });
  }
}
