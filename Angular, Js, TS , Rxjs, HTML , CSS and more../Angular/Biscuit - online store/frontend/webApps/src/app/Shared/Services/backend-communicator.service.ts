import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class BackendCommunicatorService {

  constructor(private http: HttpClient,
  ) { }

  async getItemsBySearch(searchText){
    return (await this.http.get(`${SERVER.URL}/store/search/${searchText}`).toPromise());
  }

  getAllUsers() {
    return this.http.get(`${SERVER.URL}/admin/getallusers`);
  }

  getSpecificUser(userName: string) {
    return this.http.get(`${SERVER.URL}/admin/filter/byUserName/${userName}`)
  }
}
