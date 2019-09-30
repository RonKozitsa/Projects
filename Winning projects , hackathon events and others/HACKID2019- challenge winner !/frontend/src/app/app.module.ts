import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PlotlyExampleComponent } from './plotly-example-component/plotly-example-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PlotlyModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
