import { ServerServiceService } from './services/server-service.service';
import { Component } from '@angular/core';
import {RonsHelperService } from './rons-helper.service';

declare global {
  interface Window { fbAsyncInit: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hack-app';
  description : String = '';
  comments : Array<any> = [];
  toShowPlot = false;
  email = '';
  public_transit ='';
  graph = {};
  phone = '';
  about = '';

  constructor(private serverService:ServerServiceService, private helper: RonsHelperService){
  }

  goToFacebook() {
      window.fbAsyncInit = () => {
        FB.init({
          appId: 'fake-app-id', // change to real app-id
          cookie: true,
          xfbml: true,
          version: 'v3.2'
        });
        getData(this.description,this.phone,this.email,this.public_transit,this.about);
      }; 

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    let getData = (description,phone,email,public_transit,about) => {
      const ACCESS_TOKEN = 'fake-access-token'; //change to real one 
      FB.getLoginStatus((response) => {
        //#region post description
          FB.api(
            `/452071725334114?access_token=${ACCESS_TOKEN}`,
            'POST',
            { "description": description, "phone": phone, "emails": [email], "public_transit": public_transit, "about":about },
            (response) => {
              console.log(response);
              
            }
          );
        //#endregion

        //#region Get comments
          // FB.api(
          //   `/452071725334114?access_token=${ACCESS_TOKEN}`,
          //   'GET',
          //   { "fields": "published_posts{comments}" },
          //   (response) => {
          //       if(response.published_posts && response.published_posts.data){
          //           response.published_posts.data.forEach(x => {
          //               if (x.comments) {
          //                   x.comments.data.forEach(y => {
          //                     this.comments.push(y.message);       
          //                   })
          //               }
          //           });
          //       }
          //   }
          // );
        //#endregion

        //#region - Update phone

        // FB.api(
        //     `/452071725334114?access_token=${ACCESS_TOKEN}`,
        //     'Post',
        //     { "phone": "123456789" },
        //     function (response) {
        //       console.log(response);
        //     }
        //   );
        //#endregion

      });
    
    }

  }

  talkToServer(){
    this.serverService.sendRequest(this.comments);
    this.showPlot(this.helper.getHelper());
  }

  showPlot(message_array){
    let comments_after_NLP = message_array;
    let goodCounter = 0;
    let badCounter = 0;
    for (let i = 0; i < comments_after_NLP.length; i++) {
      if (comments_after_NLP[i] < 0.5) {
        comments_after_NLP[i] = 0;
        badCounter++;
      } else {
        comments_after_NLP[i] = 1;
        goodCounter++;
      }
    }
    var good = {
      x: ["6/04", "7/04", "8/04", "9/04", "10/04", "11/04", "12/04"],
      y: [65, 70, 110, 190, 270, 350, 400 + goodCounter],
      name: 'Good Comments',
      marker: { color: 'rgb(255, 132, 39)' },
      type: 'bar'
    };

    var bad = {
      x: ["6/04", "7/04", "8/04", "9/04", "10/04", "11/04", "12/04"],
      y: [325, 319, 246, 212, 127, 95, 60 + badCounter],
      name: 'Bad Comments',
      marker: { color: 'rgb(157, 161, 162)' },
      type: 'bar'
    };

    var data = [bad, good];

    var layout = {
      barmode: 'stack',
      title: 'Comments Classification',
      xaxis: {
        title: 'Date',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      yaxis: {
        title: 'Number Of Comments',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      legend: {
        x: 0,
        y: 1.0,
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)'
      }
    };

    this.graph = {data , layout}
    this.toShowPlot = true;

  }

}


