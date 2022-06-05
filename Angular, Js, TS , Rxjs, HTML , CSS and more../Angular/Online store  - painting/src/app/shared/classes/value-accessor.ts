import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessor implements ControlValueAccessor {
  value: any;
  onChange: (value) => void;
  onTouch: () => void;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
