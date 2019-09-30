import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RonsHelperService } from './rons-helper.service';

export const SERVER_URL = 'http://localhost:4000/';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  constructor(private http: HttpClient, private helper:RonsHelperService) {
  }

  sendRequest(payload) {
    let message_array = [];
    payload = payload.map((message, index) => {
      return { 'id': index.toString(), 'language': 'en', 'text': message }
    });

    let documents = {
      'documents': payload
    };

    return this.http.post(SERVER_URL, documents).subscribe(response => {
      let response_data : any = response;
      response_data.documents.forEach(message => {
        message_array.push(message.score);
        this.helper.data = message_array;
      })
    });
  }
}
