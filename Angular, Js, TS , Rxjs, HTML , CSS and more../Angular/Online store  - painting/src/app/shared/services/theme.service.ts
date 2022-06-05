import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ThemeType } from '../components/theme-controller/theme-controller.interface';
import { WINDOW } from '../injection-tokens/window-token';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: ThemeType;

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document) {
    const currentTheme = (window.localStorage.getItem('theme') as ThemeType) || ThemeType.Light;
    this.setCurrentTheme(currentTheme);
  }

  setCurrentTheme(theme: ThemeType): void {
    this.currentTheme = theme;
    this.document.body.className = theme;
    this.window.localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    this.setCurrentTheme(newTheme);
  }

  getOppositeTheme(): ThemeType {
    return this.currentTheme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
  }
}
