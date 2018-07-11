import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public map: google.maps.Map;

  @ViewChild('gmap') gmapElement: any;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setCenter(e: any) {
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }
}
