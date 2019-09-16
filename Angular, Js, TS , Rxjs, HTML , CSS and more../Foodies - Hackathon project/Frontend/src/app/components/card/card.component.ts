import { Component, OnInit, Input } from '@angular/core';

import { cardTypes } from './cardTypes'
import { HttpClient } from 'selenium-webdriver/http';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardType: cardTypes;
  @Input() title : String;

  action = '';
  classMap = {};
  dropDownelements = [];

  constructor(private DataServiceService: DataServiceService) {
   }

  ngOnInit() {    
    this.initClassMap()
    this.populateElemets();
    const hour = new Date().getHours();
    const isRoundedTime = this.DataServiceService.isRoundedTime();
    let currentHour = isRoundedTime? `${hour+1}:00` : `${hour}:30` 
    const notWorkingHours = hour >= 23 || hour <= 8;
    currentHour = notWorkingHours? 'SELECT HOUR' : currentHour; 
    const actionMap = {
      'what': 'FOOD TYPE',
      'when': currentHour,
      'where': 'TA / GO OUT'
    }
    this.action = actionMap[`${this.title.toLowerCase()}`];
  }

  initClassMap(){
    this.classMap = {
      'foodies-card-what': this.cardType === 'what',
      'foodies-card-when ': this.cardType === 'when',
      'foodies-card-where ': this.cardType === 'where',

    }
  }

  async populateElemets(){
    this.dropDownelements = await this.DataServiceService.getCardElemets(this.title)
  }


}
