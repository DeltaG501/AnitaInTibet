import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ITINERARY_DATA } from '../constants';

const AltitudeChart: React.FC = () => {
  // Extract altitude numbers from the string data
  const data = ITINERARY_DATA.map(d => {
    const altStr = d.distance_altitude;
    // Look for patterns like "3650m" or "(3650m)"
    const match = altStr.match(/(\d{3,4})m/);
    let alt = 0; 
    
    if (match) {
      alt = parseInt(match[1]);
    } else {
        // Fallback logic
        if (d.location_end.includes("拉萨")) alt = 3650;
        else if (d.location_end.includes("林芝")) alt = 2900;
        else if (d.location_end.includes("日喀则")) alt = 3800;
        else if (d.location_end.includes("珠峰")) alt = 4200;
        else if (d.location_end.includes("广州")) alt = 50;
    }

    return {
      name: `D${d.day}`,
      alt: alt,
      loc: d.location_end
    };
  });

  return (
    <div className="w-full h-64 bg-white rounded-xl shadow-sm p-4 border border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-4 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        海拔变化趋势 (Altitude Profile)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorAlt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{fontSize: 10}} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            domain={[0, 5500]} 
            tick={{fontSize: 10}} 
            axisLine={false}
            tickLine={false}
            unit="m"
          />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ color: '#64748b', marginBottom: '0.25rem' }}
          />
          <Area 
            type="monotone" 
            dataKey="alt" 
            stroke="#2563eb" 
            fillOpacity={1} 
            fill="url(#colorAlt)" 
            animationDuration={1500}
          />
          <ReferenceLine y={3650} stroke="red" strokeDasharray="3 3" label={{ position: 'right',  value: 'Lhasa', fill: 'red', fontSize: 10 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AltitudeChart;