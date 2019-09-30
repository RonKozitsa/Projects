import {animate, group, query, state, style, transition} from '@angular/animations';

export const animations = {
	routeSlide: [
		transition('-1 => *', [
			query(':enter', [
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(-100%)',
				}),
				animate(
					'500ms ease',
					style({
						opacity: 1,
						transform: 'translateX(0%)',
					}),
				),
			]),
		]),

		// Previous, slide left to right to show left page
		transition(':decrement', [
			// set new page X location to be -100%
			query(
				':enter',
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(-100%)',
				}),
			),

			group([
				// slide existing page from 0% to 100% to the right
				query(
					':leave',
					animate(
						'500ms ease',
						style({
							position: 'fixed',
							width: '100%',
							transform: 'translateX(100%)',
						}),
					),
				),
				// slide new page from -100% to 0% to the right
				query(
					':enter',
					animate(
						'500ms ease',
						style({
							opacity: 1,
							transform: 'translateX(0%)',
						}),
					),
				),
			]),
		]),

		// Next, slide right to left to show right page
		transition(':increment', [
			// set new page X location to be 100%
			query(
				':enter',
				style({
					position: 'fixed',
					width: '100%',
					transform: 'translateX(100%)',
				}),
			),

			group([
				// slide existing page from 0% to -100% to the left
				query(
					':leave',
					animate(
						'500ms ease',
						style({
							position: 'fixed',
							width: '100%',
							transform: 'translateX(-100%)',
						}),
					),
				),
				// slide new page from 100% to 0% to the left
				query(
					':enter',
					animate(
						'500ms ease',
						style({
							opacity: 1,
							transform: 'translateX(0%)',
						}),
					),
				),
			]),
		]),
	],
	left2right: [
		state('*', style({transform: 'translateX(0)', opacity: 1})),
		state('void', style({transform: 'translateX(-100%)', opacity: 0})),
		transition('void <=> *', animate('200ms')),
	],
	right2left: [
		state('*', style({transform: 'translateX(0)', opacity: 1})),
		state('void', style({transform: 'translateX(100%)', opacity: 0})),
		transition('void <=> *', animate('200ms')),
	],
	maxHeight: [
		state('*', style({'max-height': '999px'})),
		state('void', style({'max-height': '0px'})),
		transition('void <=> *', animate('500ms')),
	],
	height: [
		state('*', style({height: '*'})),
		state('void', style({height: 0, overflow: 'hidden'})),
		transition('void <=> *', animate('100ms')),
	],
	width: [
		state('*', style({width: '*'})),
		state('void', style({width: 0, overflow: 'hidden'})),
		transition('void <=> *', animate('100ms')),
	],
	scale: [
		state('*', style({transform: 'scale(1)', opacity: 1})),
		state('void', style({transform: 'scale(0)', opacity: 0})),
		transition('void <=> *', animate('200ms')),
	],
	absoluteSlide: [
		transition(':enter', [
			style({transform: 'translate(-500%, -50%)'}),
			animate('200ms', style({transform: 'translate(-50%, -50%)'})),
		]),
		transition(':leave',
			animate('200ms', style({transform: 'translate(500%, -50%)'})),
		),
	],
	fadeInOut: [
		transition(':enter', [
			style({opacity: 0}),
			animate('200ms', style({opacity: 1})),
		]),
		transition(':leave', [
			animate('200ms', style({opacity: 0})),
		]),
	],
	verticalSlide: [
		transition(':enter', [
			style({transform: 'translate(-50%, 100%)'}),
			animate('200ms', style({transform: 'translate(-50%, -50%)'})),
		]),
		transition(':leave',
			animate('200ms', style({transform: 'translate(-50%, -100%)'})),
		),
	],
	simpleCollapse: [
		state('*', style({height: '*', opacity: 1, overflow: 'hidden'})),
		state('void', style({height: 0, opacity: 0, overflow: 'hidden'})),
		transition('void => *', animate('50ms')),
		transition('default => void', animate('100ms')),
	],
	collapse: [
		state('default', style({opacity: 1, overflow: 'hidden'})),
		state('open', style({height: '*', opacity: 1, overflow: 'hidden'})),
		state('void', style({height: 0, opacity: 0, overflow: 'hidden'})),
		transition('default => void', animate('200ms')),
		transition('void <=> open', animate('200ms')),
	],
	tableRowAnimation: [
		transition(':enter', [
			style({transform: 'translateX(100%)', opacity: 0}),
			animate('100ms', style({transform: 'translateX(0)', opacity: 1})),
		]),
		transition(':leave', [
			style({transform: 'translateX(0)', opacity: 1}),
			animate('100ms', style({transform: 'translateX(100%)', opacity: 0})),
		]),
	],
	enterAnimation: [
		transition(':enter', [
			style({'max-height': '0px', opacity: 0}),
			animate('300ms', style({'max-height': '100px', opacity: 1})),
		]),
		transition(':leave', [
			style({'max-height': '100px', opacity: 1}),
			animate('300ms', style({'max-height': '0px', opacity: 0})),
		]),
	],
};
