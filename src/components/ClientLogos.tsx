import React from 'react';

interface ClientLogoItem {
  id: string;
  name: string;
  subtitle?: string;
  fontFamily?: string;
  arabicText?: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  { id: 'hyatt', name: 'HYATT', fontFamily: 'font-serif tracking-widest text-2xl font-bold' },
  { id: 'qatar', name: 'QATAR AIRWAYS', arabicText: 'قطر', fontFamily: 'font-serif tracking-widest text-xl' },
  { id: 'park-hyatt', name: 'PARK HYATT®', fontFamily: 'font-serif tracking-widest text-xl font-medium' },
  { id: 'sothebys', name: "Sotheby's", subtitle: 'INTERNATIONAL REALTY', fontFamily: 'font-serif tracking-wider text-xl' },
  { id: 'andaz', name: 'A N d A Z.', fontFamily: 'font-sans tracking-[0.3em] text-2xl font-extralight' },
  { id: 'alila', name: 'Alila', fontFamily: 'font-sans tracking-widest text-3xl font-extralight' },
  { id: 'emaar', name: 'EMAAR', fontFamily: 'font-sans tracking-[0.25em] text-2xl font-black' },
  { id: 'sofitel-legend', name: 'SOFITEL', subtitle: 'L E G E N D', fontFamily: 'font-serif tracking-widest text-lg' },
  { id: 'st-regis', name: 'ST REGIS', subtitle: 'HOTELS & RESORTS', fontFamily: 'font-serif tracking-widest text-xl font-bold' },
  { id: 'casa-cook', name: 'Casa Cook', subtitle: 'HOTELS', fontFamily: 'font-serif italic text-2xl' },
  { id: 'sofitel', name: 'SOFITEL', subtitle: 'HOTELS & RESORTS', fontFamily: 'font-serif tracking-widest text-lg' },
  { id: 'marriott', name: 'MARRIOTT', subtitle: 'HOTELS & RESORTS', fontFamily: 'font-serif tracking-wider text-2xl font-semibold' },
  { id: 'shangri-la', name: 'SHANGRI-LA', fontFamily: 'font-serif tracking-widest text-xl font-medium' },
  { id: 'w-hotels', name: 'W', subtitle: 'HOTELS', fontFamily: 'font-sans tracking-widest text-3xl font-black' },
  { id: 'raffles', name: 'RAFFLES', subtitle: 'HOTELS & RESORTS', fontFamily: 'font-serif tracking-[0.2em] text-xl' },
  { id: 'four-seasons', name: 'FOUR SEASONS', fontFamily: 'font-serif tracking-widest text-xl font-medium' },
  { id: 'eagle-hills', name: 'EAGLE HILLS', fontFamily: 'font-sans tracking-widest text-xl font-bold' },
  { id: 'banyan-tree', name: 'BANYAN TREE', subtitle: 'GROUP', fontFamily: 'font-serif tracking-widest text-lg' },
  { id: 'klm', name: 'KLM', fontFamily: 'font-sans tracking-widest text-3xl font-black' },
  { id: 'aero', name: 'Aero', fontFamily: 'font-sans tracking-wider text-2xl font-light' },
  { id: 'aman', name: 'Ā M A N', fontFamily: 'font-sans tracking-[0.4em] text-2xl font-extralight' },
  { id: 'iamsterdam', name: 'I amsterdam', fontFamily: 'font-sans tracking-tight text-xl font-bold' },
  { id: 'rosewood', name: 'ROSEWOOD', subtitle: 'HOTEL GROUP', fontFamily: 'font-serif tracking-[0.25em] text-lg' },
  { id: 'inspired-iceland', name: 'Inspired by', subtitle: 'Iceland', fontFamily: 'font-sans tracking-tight text-xl font-medium' },
  { id: 'orascom', name: 'ORASCOM', subtitle: 'DEVELOPMENT', fontFamily: 'font-sans tracking-widest text-lg font-bold' },
  { id: 'fairmont', name: 'Fairmont', subtitle: 'HOTELS & RESORTS', fontFamily: 'font-serif italic text-2xl' },
  { id: 'ascott', name: 'ASCOTT', fontFamily: 'font-sans tracking-widest text-xl font-bold' },
  { id: 'ramhan', name: 'RAMHAN ISLAND', subtitle: 'ABU DHABI', fontFamily: 'font-serif tracking-widest text-lg' },
  { id: 'ritz-carlton', name: 'THE RITZ-CARLTON®', fontFamily: 'font-serif tracking-wider text-xl font-semibold' },
  { id: 'el-gouna', name: 'EL GOUNA', fontFamily: 'font-sans tracking-widest text-xl font-medium' }
];

export const ClientLogos: React.FC = () => {
  const renderLogoContent = (item: ClientLogoItem) => (
    <div className="flex flex-col items-center justify-center text-center p-4 min-w-[170px] sm:min-w-[200px] h-28 hover:opacity-100 opacity-80 transition-all duration-300 transform hover:scale-105 select-none">
      <div className={`text-neutral-900 ${item.fontFamily || 'font-serif text-xl'}`}>
        {item.name}
      </div>
      {item.arabicText && (
        <span className="text-xs font-serif text-neutral-600 tracking-wider -mt-1 block">
          {item.arabicText}
        </span>
      )}
      {item.subtitle && (
        <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 font-semibold mt-1 block">
          {item.subtitle}
        </span>
      )}
    </div>
  );

  return (
    <section className="py-24 px-6 md:px-12 bg-white text-neutral-900 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header matching Screenshot 2 */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.15em] text-neutral-800 uppercase">
            60+ CLIENTS. 17+ COUNTRIES. 1 TRIBE.
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase">
            360 INTEGRATED MARKETING & PRODUCTION SERVICES THAT ELEVATE PREMIUM AND LUXURY BRANDS
          </p>
        </div>

        {/* Full Grid View directly without toggle buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-6">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="border border-neutral-100 rounded-lg bg-neutral-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              {renderLogoContent(logo)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
