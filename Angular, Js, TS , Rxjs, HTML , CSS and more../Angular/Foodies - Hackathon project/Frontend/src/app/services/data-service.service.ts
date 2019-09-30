import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  catego = {};

  constructor(private http: HttpClient) { }
  
  async getCardElemets(type : String) : Promise<string[]>{

    const option = this.getOptions();

    switch(type.toLocaleLowerCase()) { 
      case 'what': { 
        var res = []
        await this.getCategories().toPromise().then(data => {
          console.log('data is: '+ data.map(category=>category.name));
          res = data.map(category=>category.name);
          }
        );
        return res;
      } 
      case 'when': { 
        console.log('in when');
        return this.getRelevantTimeArray(); 
      } 
      case 'where': { 
        return ['T/A', 'Go Out']; 
      } 
      default: { 
        return [];
      } 
   } 
  };

  //TODO: finish thw call
  async sendMealRequest(user, category, time, location )
  {
    const httpOptions = this.getOptions();
    let uuid = this.getUuidByUserName(user);
    let body = {
      "uid": uuid,
      "category": category,
      "time": time,
      "location": location,
  }
    await this.http.post('http://10.101.4.95:8000/requests/', body, httpOptions)
  }

  async getUuidByUserName(username){
    let uuid = undefined;
    await this.getUsers().toPromise().then(data => {
      let users = data.users;
      let res = users.find(user => user.username === username);
      uuid = res.uid;
    });
    return uuid;
  }

  getUsers(): Observable<any>{
    const httpOptions = this.getOptions();

    return this.http.get('http://url/users/', httpOptions);
  }

  getCategories(): Observable<any>{
    const httpOptions = this.getOptions();
    return this.http.get('http://url/categories/', httpOptions);
  }

  getOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, HEAD, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return httpOptions;
  }

  getRelevantTimeArray(): string[] {
    let isRoundTime = this.isRoundedTime();
    const hours = [];
    const today = new Date();

    let hour = isRoundTime ? today.getHours() + 1: today.getHours();
    while (hour < 23 && hour >= 8 ){
      const formattedHour = isRoundTime ? `${hour}:00` : `${hour}:30`;
      hour = isRoundTime ? hour : hour + 1;
      isRoundTime = !isRoundTime;
      hours.push(formattedHour)
    }
    return hours.length ? hours : ['Available between 08:00 to 23:00'];
  }

  isRoundedTime() : boolean{
    const today = new Date();
    const minutes = today.getMinutes();
    return minutes > 30; 
  }
}

