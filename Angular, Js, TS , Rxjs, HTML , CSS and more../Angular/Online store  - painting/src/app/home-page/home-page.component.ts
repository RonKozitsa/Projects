import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subject, takeUntil } from 'rxjs';
import { trigger } from '@angular/animations';

import { animations } from '../shared/animations/animations';
import { ButtonType } from '../shared/components/app-button/app-button.interface';
import { artistsQuotes } from './home-page.consts';
import { QuoteI } from './home-page.interface';
import { MainPagesNavigationNamesEnums } from '../shared/interfaces/pages-navigation-names.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [trigger('fadeInOut', animations.fadeInOut)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
  readonly mainPagesNavigationNamesEnums = MainPagesNavigationNamesEnums;

  currentQuote = artistsQuotes[0];
  quotes: QuoteI[] = artistsQuotes;
  loadingQuote: boolean;
  destroy$ = new Subject<void>();
  buttonType = ButtonType;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadingQuote = true;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
          // to make disappear and reappear
          this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
          this.loadingQuote = false;
          this.changeDetectorRef.markForCheck();
        }, 1000);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
