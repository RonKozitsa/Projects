import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { ButtonType } from './app-button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
  @Input() buttonType = ButtonType.standard;
  @Input() disabled: boolean;
  @Input() customClass = '';

  @Output() clicked = new EventEmitter<void>();
}
