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
  isLive?: boolean; // Flag to indicate if data is from live API
}

export interface RentalInfo {
  provider: string;
  model: string;
  period: string;
  price: string;
  insurance: string;
  location: string;
  phone: string;
}

export interface DayItinerary {
  day: number;
  date: string;
  route: string;
  distance_altitude: string;
  stay: string;
  stay_address?: string; // Address for navigation
  rental_info?: RentalInfo; // Car rental details
  highlights: string[];
  photo_spots?: string; // e.g., 日照金山
  note?: string;
  weather: WeatherInfo;
  coordinates?: { lat: number; lng: number }; // For weather API
  location_start: string;
  location_end: string;
  description: string;
}

export interface TripSummary {
  title: string;
  theme: string;
  features: string[];
}