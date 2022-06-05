import { animate, group, style, transition } from '@angular/animations';

export const animations = {
  fadeInOut: [transition(':enter', [style({ opacity: 0, 'z-index': 999 }), animate('200ms', style({ opacity: 1 }))]), transition(':leave', [animate('200ms', style({ opacity: 0 }))])],
  fadeIn: [transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))])],
  fadeOut: [transition(':leave', [style({ opacity: 1 }), animate('200ms', style({ opacity: 0 }))])],
  inOutAnimation: [
    transition(':enter', [style({ height: 0, opacity: 0 }), group([animate('0.1s ease-out', style({ height: 'auto' })), animate('1s ease-out', style({ opacity: 1 }))])]),
    transition(':leave', [style({ height: 'auto', opacity: 1 }), animate('0.2s ease-in', style({ height: 0, opacity: 0 }))])
  ]
};
