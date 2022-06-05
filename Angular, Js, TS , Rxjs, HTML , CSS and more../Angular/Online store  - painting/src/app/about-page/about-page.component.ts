import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {
  carouselImages: string[] = ['about-page/sitting.jpeg', 'about-page/painting-in-progress.jpeg', 'about-page/flowers-painting-in-progress.jpeg'];
}
