import React from 'react';
import { 
  Plane, 
  MapPin, 
  Mountain, 
  Sun, 
  Cloud, 
  CloudSnow, 
  Wind, 
  Camera, 
  Home, 
  Navigation,
  Calendar,
  Thermometer
} from 'lucide-react';
import { WeatherInfo } from '../types';

export const IconPlane = ({ className }: { className?: string }) => <Plane className={className} />;
export const IconMapPin = ({ className }: { className?: string }) => <MapPin className={className} />;
export const IconMountain = ({ className }: { className?: string }) => <Mountain className={className} />;
export const IconCamera = ({ className }: { className?: string }) => <Camera className={className} />;
export const IconHome = ({ className }: { className?: string }) => <Home className={className} />;
export const IconNavigation = ({ className }: { className?: string }) => <Navigation className={className} />;
export const IconCalendar = ({ className }: { className?: string }) => <Calendar className={className} />;

export const WeatherIcon = ({ condition, className }: { condition: WeatherInfo['condition'], className?: string }) => {
  switch (condition) {
    case 'Sunny': return <Sun className={`text-yellow-500 ${className}`} />;
    case 'Cloudy': return <Cloud className={`text-gray-400 ${className}`} />;
    case 'PartlyCloudy': return <Cloud className={`text-blue-300 ${className}`} />;
    case 'Snow': return <CloudSnow className={`text-blue-200 ${className}`} />;
    case 'Overcast': return <Cloud className={`text-gray-600 ${className}`} />;
    default: return <Sun className={className} />;
  }
};