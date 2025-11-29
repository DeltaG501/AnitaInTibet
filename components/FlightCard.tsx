import React from 'react';
import { FlightSegment } from '../types';
import { IconPlane } from './Icons';

interface FlightCardProps {
  flights: FlightSegment[];
  type: 'Outbound' | 'Inbound';
}

const FlightCard: React.FC<FlightCardProps> = ({ flights, type }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 mb-4">
      <div className="flex items-center gap-2 mb-4">
        <div className={`p-2 rounded-lg ${type === 'Outbound' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
          <IconPlane className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-slate-800">{type === 'Outbound' ? '去程航班 (Outbound)' : '返程航班 (Inbound)'}</h3>
        <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-500 ml-auto">{flights[0].date}</span>
      </div>

      <div className="space-y-4">
        {flights.map((flight, idx) => (
          <div key={`${flight.flightNumber}-${idx}`} className="relative pl-4 border-l-2 border-slate-200 last:border-0 pb-1">
             {/* Timeline dot */}
             <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-400"></div>
             
             <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-bold text-slate-900">{flight.depTime} <span className="text-slate-400 text-sm mx-1">to</span> {flight.arrTime}</div>
                  <div className="text-sm font-semibold text-slate-700">{flight.from} <span className="text-slate-400">→</span> {flight.to}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-600">{flight.flightNumber}</div>
                  <div className="text-xs text-slate-500">{flight.airline}</div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightCard;