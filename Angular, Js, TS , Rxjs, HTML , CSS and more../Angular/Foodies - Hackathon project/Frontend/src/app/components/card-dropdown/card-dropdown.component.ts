import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-dropdown',
  templateUrl: './card-dropdown.component.html',
  styleUrls: ['./card-dropdown.component.scss']
})
export class CardDropdownComponent implements OnInit {

  @Input() elements: Array<String>;
  @Input() action: String;

  constructor() { }

  ngOnInit() {
  }

}
