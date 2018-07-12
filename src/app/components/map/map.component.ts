import {Component, OnInit} from '@angular/core';
import {MouseEvent} from '@agm/core';

export const agency = {
  agency_id: 'FunBus',
  agency_name: 'The Fun Bus',
  agency_url: 'http://www.thefunbus.org',
  agency_timezone: 'America/Los_Angeles',
  agency_phone: '(310) 555-0222',
  agency_lang: 'en'
};

export const stops = [
  {
    stop_id: 'S1',
    stop_name: 'Mission St. & Silver Ave.',
    stop_desc: 'The stop is located at the southwest corner of the intersection.',
    stop_lat: 37.728631,
    stop_lon: -122.431282,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S2',
    stop_name: 'Mission St. & Cortland Ave.',
    stop_desc: 'The stop is located 20 feet south of Mission St.',
    stop_lat: 37.74103,
    stop_lon: -122.422482,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S3',
    stop_name: 'Mission St. & 24th St.',
    stop_desc: 'The stop is located at the southwest corner of the intersection.',
    stop_lat: 37.75223,
    stop_lon: -122.418581,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S4',
    stop_name: 'Mission St. & 21st St.',
    stop_desc: 'The stop is located at the northwest corner of the intersection.',
    stop_lat: 37.75713,
    stop_lon: -122.418982,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S5',
    stop_name: 'Mission St. & 18th St.',
    stop_desc: 'The stop is located 25 feet west of 18th St.',
    stop_lat: 37.761829,
    stop_lon: -122.419382,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S6',
    stop_name: 'Mission St. & 15th St.',
    stop_desc: 'The stop is located 10 feet north of Mission St.',
    stop_lat: 37.766629,
    stop_lon: -122.419782,
    stop_url: null,
    location_type: null,
    parent_station: null
  },
  {
    stop_id: 'S7',
    stop_name: '24th St. Mission Station',
    stop_desc: null,
    stop_lat: 37.752240,
    stop_lon: -122.418450,
    stop_url: null,
    location_type: null,
    parent_station: 'S8'
  },
  {
    stop_id: 'S8',
    stop_name: '24th St. Mission Station',
    stop_desc: null,
    stop_lat: 37.752240,
    stop_lon: -122.418450,
    stop_url: 'http://www.bart.gov/stations/stationguide/stationoverview_24st.asp',
    location_type: 1,
    parent_station: null
  }
];

export const routes = [
  {
    route_id: 'A',
    route_short_name: 17,
    route_long_name: 'Mission',
    route_desc: 'The "A" route travels from lower Mission to Downtown.',
    route_type: 3
  }
];

export const trips = [
  {
    block_id: 1,
    route_id: 'A',
    service_id: 'WE',
    trip_id: 'AWE1',
    trip_headsign: 'Downtown',
  },
  {
    block_id: 2,
    route_id: 'A',
    service_id: 'WE',
    trip_id: 'AWE2',
    trip_headsign: 'Downtown',
  }
];

export const calendar = [
  {
    service_id: 'WE',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: true,
    sunday: true,
    start_date: 20060701,
    end_date: 20060731
  },
  {
    service_id: 'WD',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
    start_date: 20060701,
    end_date: 20060731
  }
];

export const calendar_dates = [
  {
    service_id: 'WD',
    date: 20060703,
    exception_type: 2
  },
  {
    service_id: 'WE',
    date: 20060703,
    exception_type: 1
  },
  {
    service_id: 'WD',
    date: 20060704,
    exception_type: 2
  },
  {
    service_id: 'WE',
    date: 20060704,
    exception_type: 1
  }
];

export const stop_times = [];

export const fare_attributes = [
  {
    fare_id: 1,
    price: 0.00,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 0,
    transfer_duration: 0
  },
  {
    fare_id: 2,
    price: 0.50,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 0,
    transfer_duration: 0
  },
  {
    fare_id: 3,
    price: 1.50,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 0,
    transfer_duration: 0
  },
  {
    fare_id: 4,
    price: 2.00,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 0,
    transfer_duration: 0
  },
  {
    fare_id: 5,
    price: 2.50,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 0,
    transfer_duration: 0
  }
];

export const fare_rules = [
  {
    fare_id: 'a',
    route_id: 'TSW',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'TSW',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'GRT',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'GRJ',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'SVJ',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'JSV',
    origin_id: 1,
    destination_id: 1,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'GRT',
    origin_id: 2,
    destination_id: 4,
    contains_id: null
  },
  {
    fare_id: 'a',
    route_id: 'GRJ',
    origin_id: 4,
    destination_id: 2,
    contains_id: null
  },
  {
    fare_id: 'b',
    route_id: 'GRT',
    origin_id: 3,
    destination_id: 3,
    contains_id: null
  },
  {
    fare_id: 'c',
    route_id: 'GRT',
    origin_id: null,
    destination_id: null,
    contains_id: 6
  },
];

export const shapes = [
  {
    shape_id: 'A_shp',
    shape_pt_lat: 37.61956,
    shape_pt_lon: -122.48161,
    shape_pt_sequence: 1,
    shape_dist_traveled: 0
  },
  {
    shape_id: 'A_shp',
    shape_pt_lat: 37.64430,
    shape_pt_lon: -122.41070,
    shape_pt_sequence: 2,
    shape_dist_traveled: 6.8310
  },
  {
    shape_id: 'A_shp',
    shape_pt_lat: 37.65863,
    shape_pt_lon: -122.30839,
    shape_pt_sequence: 3,
    shape_dist_traveled: 15.8765
  },
];

export const frequencies = [
  {
    trip_id: 'AWE1',
    start_time: '05:30:00',
    end_time: '06:30:00',
    headway_secs: 300
  },
  {
    trip_id: 'AWE1',
    start_time: '06:30:00',
    end_time: '20:30:00',
    headway_secs: 180
  },
  {
    trip_id: 'AWE1',
    start_time: '20:30:00',
    end_time: '28:00:00',
    headway_secs: 420
  }
];

export const transfers = [
  {
    from_stop_id: 'S6',
    to_stop_id: 'S7',
    transfer_type: 2,
    min_transfer_time: 300
  },
  {
    from_stop_id: 'S7',
    to_stop_id: 'S6',
    transfer_type: 3,
    min_transfer_time: null
  },
  {
    from_stop_id: 'S23',
    to_stop_id: 'S7',
    transfer_type: 1,
    min_transfer_time: null
  },
];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // info
  public destination: {};
  public info = {
    name: agency.agency_name,
    url: agency.agency_url,
    phone: agency.agency_phone
  };
  public lat = 37.752240;
  public lng = -122.418450;
  public markers: Marker[] = stops.map(item => {
    return {lat: item.stop_lat,
      lng: item.stop_lon,
      label: `${item.stop_name}`,
      draggable: false
    };
  });
  public origin: {};
  public showRoute = false;

  // google maps zoom level
  public zoom = 12;

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: stops[0].stop_lat, lng: stops[0].stop_lon };
    this.destination = { lat: stops[stops.length - 1].stop_lat, lng: stops[stops.length - 1].stop_lon };
  }

  public switchMapMode() {
    this.showRoute = !this.showRoute;
  }

  public showText() {
    return (this.showRoute) ? 'Hide route' : 'Show route';
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

// just an interface for type safety.
export interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
