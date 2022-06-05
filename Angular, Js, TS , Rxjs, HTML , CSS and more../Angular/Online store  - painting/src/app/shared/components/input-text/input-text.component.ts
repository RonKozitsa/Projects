import { Component, ChangeDetectionStrategy, Self, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ValueAccessor } from '../../classes/value-accessor';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends ValueAccessor {
  @Input() label: string;

  constructor(@Self() private ngControl: NgControl) {
    super();
    this.ngControl.valueAccessor = this;
  }

  get showError(): boolean {
    if (!this.ngControl) {
      return false;
    }

    return this.ngControl.touched && this.ngControl.invalid;
  }
}
