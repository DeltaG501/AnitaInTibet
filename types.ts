export interface FlightSegment {
  flightNumber: string;
  from: string;
  to: string;
  depTime: string;
  arrTime: string;
  airline: string;
  date: string;
}

export interface WeatherInfo {
  temp: string;
  condition: 'Sunny' | 'Cloudy' | 'Snow' | 'Overcast' | 'PartlyCloudy';
  wind: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  route: string;
  distance_altitude: string;
  stay: string;
  highlights: string[];
  photo_spots?: string; // e.g., 日照金山
  note?: string;
  weather: WeatherInfo;
  location_start: string;
  location_end: string;
  description: string;
}

export interface TripSummary {
  title: string;
  theme: string;
  features: string[];
}