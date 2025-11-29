import React from 'react';
import { DayItinerary } from '../types';
import { IconMountain, IconCamera, IconHome, WeatherIcon } from './Icons';
import MapWidget from './MapWidget';

interface DayCardProps {
  data: DayItinerary;
}

const DayCard: React.FC<DayCardProps> = ({ data }) => {
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
                <span>{data.weather.condition}</span>
                <WeatherIcon condition={data.weather.condition} className="w-4 h-4" />
                <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">{data.weather.temp}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">{data.route}</h2>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="mb-4">
             <MapWidget from={data.location_start} to={data.location_end} distance={data.distance_altitude} />
          </div>

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
                  <div className="text-sm font-semibold text-slate-800">
                    {data.stay}
                  </div>
                  {data.note && (
                    <div className="text-xs text-indigo-600 mt-1 bg-white/50 p-1 rounded inline-block">
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