import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';
import { BackendCommunicatorService } from '../../../Shared/Services/backend-communicator.service';
import { ItemInterface } from 'src/app/Shared/types.interface';
import { HttpClient } from '@angular/common/http';
import { SERVER } from 'src/app/Shared/enums';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  textualSearch = '';
  items : ItemInterface[];
  displayLodaer = false;
  onTextChangedDebounced = debounce(this.onTextChanged, 500);
  currentPage = 1;
  itemsPerPage = 12;
  itemOnCurrentPage = [];
  dataLoaded = false;

  constructor(private backendCommunicatorService: BackendCommunicatorService, private http: HttpClient) {}

  async ngOnInit() {
    this.http.post(`${SERVER.URL}/setstatusbyid/home`, {}).subscribe();
    this.displayLodaer = true;
    await this.setItems();
    this.itemOnCurrentPage = this.items.slice(0, this.itemsPerPage);
    this.displayLodaer = false;
    this.dataLoaded = true;
  }

  onPageChanged(page) {
    const beggining = Math.min((page - 1) * this.itemsPerPage, this.items.length);
    const end = Math.min(beggining + 12, this.items.length)
    this.itemOnCurrentPage = this.items.slice(beggining, end);
    console.log(this.itemOnCurrentPage);
    
  }

  async onTextChanged() {
    this.displayLodaer = true;
    await this.setItems();
    this.onPageChanged(1);
    this.displayLodaer = false;    
  }

  async setItems (){
    this.items = <ItemInterface[]>await this.backendCommunicatorService.getItemsBySearch(this.textualSearch);
  }

}
