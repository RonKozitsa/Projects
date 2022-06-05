import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppCarouselComponent {
  @Input() frameColor: string;
  @Input() carouselImages: string[];

  pauseOnHover = true;
  pauseOnFocus = true;
  interval = 5000;

  isPreviewImage(imgName: string): boolean {
    return imgName.includes('preview');
  }
}
