import React, { useState, useEffect } from 'react';
import { DayItinerary, WeatherInfo } from '../types';
import { IconMountain, IconCamera, IconHome, WeatherIcon, IconNavigation } from './Icons';
import MapWidget from './MapWidget';
import { Phone, Car, ShieldCheck } from 'lucide-react';

interface DayCardProps {
  data: DayItinerary;
}

const DayCard: React.FC<DayCardProps> = ({ data }) => {
  // Local state for weather to support live updates
  const [weatherData, setWeatherData] = useState<WeatherInfo>(data.weather);
  const [loadingWeather, setLoadingWeather] = useState(false);

  useEffect(() => {
    // Basic implementation to fetch live weather if coordinates exist
    // Using OpenMeteo Free API (No key required)
    const fetchWeather = async () => {
      if (!data.coordinates) return;
      
      try {
        setLoadingWeather(true);
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${data.coordinates.lat}&longitude=${data.coordinates.lng}&current_weather=true&timezone=Asia%2FShanghai`
        );
        const json = await res.json();
        
        if (json.current_weather) {
          const w = json.current_weather;
          // Map WMO codes to our types
          let cond: WeatherInfo['condition'] = 'Sunny';
          if (w.weathercode > 3) cond = 'Cloudy';
          if (w.weathercode > 40) cond = 'Overcast';
          if (w.weathercode > 70) cond = 'Snow';

          setWeatherData({
            temp: `${w.temperature}°C`,
            condition: cond,
            wind: `${w.windspeed}km/h`,
            isLive: true
          });
        }
      } catch (e) {
        // Fallback to static data on error, no action needed as state initialized with data.weather
        console.warn("Weather fetch failed, using static data");
      } finally {
        setLoadingWeather(false);
      }
    };

    fetchWeather();
  }, [data.coordinates]);

  const handleHotelClick = () => {
    if (!data.stay_address) return;
    const url = `https://www.amap.com/dir?to[name]=${encodeURIComponent(data.stay_address)}&type=car`;
    window.open(url, '_blank');
  };

  const handleRentalLocClick = () => {
    if (!data.rental_info) return;
    const url = `https://www.amap.com/dir?to[name]=${encodeURIComponent(data.rental_info.location)}&type=car`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex gap-4 mb-8 relative">
      {/* Sidebar Timeline */}
      <div className="flex flex-col items-center pt-2">
        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 border-4 border-slate-50">
          D{data.day}
        </div>
        <div className="w-0.5 flex-grow bg-slate-200 mt-2"></div>
      </div>

      {/* Main Card Content */}
      <div className="flex-1 min-w-0 pb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          
          {/* Header: Date & Route */}
          <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-1">
                <span>{data.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span className={weatherData.isLive ? "text-green-600 font-bold" : ""}>
                    {weatherData.condition} {weatherData.isLive && "(Live Today)"}
                </span>
                <WeatherIcon condition={weatherData.condition} className="w-4 h-4" />
                <span className={`text-xs px-1.5 py-0.5 rounded ${weatherData.isLive ? "bg-green-100 text-green-700" : "bg-slate-100"}`}>
                    {weatherData.temp}
                </span>
                {loadingWeather && <span className="text-xs text-slate-300 animate-pulse">Updating...</span>}
              </div>
              <h2 className="text-xl font-bold text-slate-800">{data.route}</h2>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="mb-4">
             <MapWidget from={data.location_start} to={data.location_end} distance={data.distance_altitude} />
          </div>

          {/* Rental Info Card (If present) */}
          {data.rental_info && (
            <div className="mb-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Car className="w-24 h-24" />
                </div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-yellow-400" />
                    租车信息 (Car Rental)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm relative z-10">
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">车型 (Model)</span>
                        <span className="font-semibold text-lg text-yellow-400">{data.rental_info.model}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">供应商 (Provider)</span>
                        <span className="font-semibold">{data.rental_info.provider}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">租期 (Period)</span>
                        <span>{data.rental_info.period}</span>
                    </div>
                     <div className="flex flex-col">
                        <span className="text-slate-400 text-xs">价格 (Price)</span>
                        <span>{data.rental_info.price}</span>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex items-center gap-2 bg-white/10 p-2 rounded-lg">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span className="text-xs">{data.rental_info.insurance}</span>
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 flex gap-3 mt-1">
                        <a 
                            href={`tel:${data.rental_info.phone}`}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors font-medium text-xs"
                        >
                            <Phone className="w-3 h-3" />
                            拨打: {data.rental_info.phone}
                        </a>
                        <button 
                            onClick={handleRentalLocClick}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded flex items-center justify-center gap-2 transition-colors font-medium text-xs"
                        >
                            <IconNavigation className="w-3 h-3" />
                            导航: {data.rental_info.location}
                        </button>
                    </div>
                </div>
            </div>
          )}

          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Left Col: Highlights & Photo Spots */}
            <div className="space-y-3">
               <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <h4 className="text-xs uppercase font-bold text-orange-400 mb-2 flex items-center gap-1">
                    <IconCamera className="w-3 h-3" /> 行程亮点 (Highlights)
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                    {data.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  {data.photo_spots && (
                    <div className="mt-2 pt-2 border-t border-orange-200/50 text-xs font-semibold text-orange-700 flex gap-2">
                      <span className="bg-orange-200 px-1 rounded text-orange-800 shrink-0">最佳拍摄</span>
                      {data.photo_spots}
                    </div>
                  )}
               </div>
               
               <p className="text-sm text-slate-600 leading-relaxed italic">
                 "{data.description}"
               </p>
            </div>

            {/* Right Col: Stats & Stay */}
            <div className="space-y-3 flex flex-col">
              <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 flex-1">
                 <h4 className="text-xs uppercase font-bold text-indigo-400 mb-2 flex items-center gap-1">
                    <IconHome className="w-3 h-3" /> 住宿 (Accommodation)
                  </h4>
                  
                  <div 
                    className={`text-sm font-semibold text-slate-800 group flex items-start gap-1 transition-colors ${data.stay_address ? 'cursor-pointer hover:text-blue-600' : ''}`}
                    onClick={handleHotelClick}
                    title={data.stay_address ? "点击导航到酒店" : ""}
                  >
                    <span>{data.stay}</span>
                    {data.stay_address && (
                      <IconNavigation className="w-3 h-3 mt-1 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>

                  {data.stay_address && (
                     <div className="text-[10px] text-slate-500 mt-0.5 pl-0.5 truncate">
                       📍 {data.stay_address}
                     </div>
                  )}

                  {data.note && (
                    <div className="text-xs text-indigo-600 mt-2 bg-white/50 p-1.5 rounded inline-block border border-indigo-100/50">
                      Note: {data.note}
                    </div>
                  )}
              </div>

               <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                 <h4 className="text-xs uppercase font-bold text-slate-400 mb-2 flex items-center gap-1">
                    <IconMountain className="w-3 h-3" /> 海拔/里程 (Stats)
                  </h4>
                  <div className="text-sm font-mono text-slate-700">
                    {data.distance_altitude}
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DayCard;