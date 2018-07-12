import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MapComponent} from './components/map/map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  bootstrap: [AppComponent, MapComponent],
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBlGHDqTQRHVtz99LMLV2mw6d8ZkY7OCdM'
    }),
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule {
}
