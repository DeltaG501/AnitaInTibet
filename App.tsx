import React from 'react';
import { TRIP_SUMMARY, ITINERARY_DATA, FLIGHTS_OUTBOUND, FLIGHTS_INBOUND } from './constants';
import DayCard from './components/DayCard';
import FlightCard from './components/FlightCard';
import AltitudeChart from './components/AltitudeChart';
import { IconMountain, IconCalendar } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12">
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-900 text-white pt-12 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-4 border border-blue-700">
              <IconCalendar className="w-3 h-3" />
              12月10日 - 12月23日
           </div>
           <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
             {TRIP_SUMMARY.title}
           </h1>
           <p className="text-blue-200 text-lg mb-6">
             {TRIP_SUMMARY.theme}
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {TRIP_SUMMARY.features.map((feature, idx) => {
                 const [title, desc] = feature.split('：');
                 return (
                   <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="font-bold text-yellow-400 text-sm mb-1">{title}</div>
                      <div className="text-xs text-slate-300 leading-snug">{desc}</div>
                   </div>
                 );
              })}
           </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-3xl mx-auto px-4 -mt-10 z-10 relative">
        
        {/* Altitude Chart Section */}
        <section className="mb-8 animate-fade-in-up">
           <AltitudeChart />
        </section>

        {/* Flight Information */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
            航班信息 (Flights)
          </h2>
          <FlightCard flights={FLIGHTS_OUTBOUND} type="Outbound" />
          <FlightCard flights={FLIGHTS_INBOUND} type="Inbound" />
        </section>

        {/* Daily Itinerary */}
        <section>
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
                每日行程 (Itinerary)
              </h2>
             <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">共 14 天</span>
          </div>
          
          <div className="pl-2">
            {ITINERARY_DATA.map((day) => (
              <DayCard key={day.day} data={day} />
            ))}
          </div>
        </section>

        {/* Footer info */}
        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
           <div className="flex justify-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <IconMountain className="w-4 h-4" />
                <span>安全第一</span>
              </div>
           </div>
           <p>© 2023 Tibet Travel Planner. Designed based on your itinerary.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;