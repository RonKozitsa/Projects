import { Component, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { get, debounce } from 'lodash';

import {BackendCommunicatorService} from "../../../Shared/Services/backend-communicator.service";
import { HttpClient } from '@angular/common/http';
import { SERVER } from 'src/app/Shared/enums';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  columnDefs;
  rowData= [];
  gridApi: GridApi;
  textualSearch = "";
  displayLodaer = false;
  onTextChangedDebounced = debounce(this.onTextChanged, 500);

  constructor(private backendCommunicatorService: BackendCommunicatorService, private http: HttpClient) { }

  ngOnInit() {
    this.http.post(`${SERVER.URL}/setstatusbyid/admin`, {}).subscribe();
    this.getData();
    this.columnDefs = [
      {
        headerName: 'User Name' ,
        field: 'ID'
      },
      {
        headerName: 'Name',
        field: 'Name'
      },
      {
        headerName: 'Email',
        field: 'Email'
      },
      {
        headerName: '# items in cart',
        valueGetter : (params) => get(params, 'data.Cart.length')
      },
      {
        headerName: '# items bought',
        valueGetter : (params) => get(params, 'data.Purchases.length')
      },
      {
        headerName: 'Current status',
        valueGetter : (params) => get(params, 'data.Status') || 'Offline'
      }
    ];
  }


  onTextChanged() {
    this.getData(); 
  }

  getData (){
    this.displayLodaer = true;
    if (this.textualSearch){
      this.backendCommunicatorService.getSpecificUser(this.textualSearch).subscribe(data => {
        this.rowData = data as Array<any>;
        this.displayLodaer = false;   
      });
    } else {
      this.backendCommunicatorService.getAllUsers().subscribe(data => { 
        this.rowData = data as Array<any>;
        this.displayLodaer = false;
      });
    }
  }

  onGridReady(event){
    this.gridApi = event.api;
    this.gridApi.sizeColumnsToFit();
  }}
