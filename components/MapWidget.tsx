import React from 'react';
import { IconNavigation, IconMapPin } from './Icons';

interface MapWidgetProps {
  from: string;
  to: string;
  distance: string;
}

const MapWidget: React.FC<MapWidgetProps> = ({ from, to, distance }) => {
  
  const handleNavigation = () => {
    // Construct Amap direction URL
    // Web version: https://www.amap.com/dir?from[name]=start&to[name]=end
    const url = `https://www.amap.com/dir?from[name]=${encodeURIComponent(from)}&to[name]=${encodeURIComponent(to)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden relative group">
      {/* Header mimics map app UI */}
      <div className="absolute top-2 left-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm z-10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-slate-700 font-medium">
            <IconNavigation className="w-3 h-3 text-blue-500" />
            <span>高德地图 (Amap)</span>
        </div>
        <div className="text-slate-500">{distance}</div>
      </div>

      {/* Visual Placeholder for Map Route */}
      <div className="h-32 bg-slate-200 w-full relative flex items-center justify-center bg-[url('https://api.placeholder.com/400/150')]">
        {/* Abstract Map Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
        
        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 50 80 Q 150 20 250 80" stroke="#3b82f6" strokeWidth="3" fill="none" strokeDasharray="6 4" />
            <circle cx="50" cy="80" r="4" fill="#3b82f6" />
            <circle cx="250" cy="80" r="4" fill="#ef4444" />
        </svg>

        <div className="z-0 flex items-center gap-8 translate-y-2">
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-600 bg-white px-1 rounded shadow-sm mb-1">{from}</span>
                <IconMapPin className="w-5 h-5 text-blue-600 drop-shadow-md" />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-600 bg-white px-1 rounded shadow-sm mb-1">{to}</span>
                <IconMapPin className="w-5 h-5 text-red-600 drop-shadow-md" />
            </div>
        </div>
      </div>
      
      <div className="px-3 py-2 bg-blue-50 text-[10px] text-blue-700 flex items-center justify-between">
        <span>推荐路线: G318国道/高速优先</span>
        <button 
            onClick={handleNavigation}
            className="px-2 py-0.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors flex items-center gap-1"
        >
            <IconNavigation className="w-3 h-3" />
            开始导航
        </button>
      </div>
    </div>
  );
};

export default MapWidget;