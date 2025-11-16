import { FlightData } from './types';

export const AIRLINES = [
  'IndiGo',
  'Air India',
  'Vistara',
  'SpiceJet',
  'Akasa Air',
  'Air India Express',
];

export const AIRPORTS = [
  { code: 'DEL', name: 'New Delhi (DEL)' },
  { code: 'BOM', name: 'Mumbai (BOM)' },
  { code: 'BLR', name: 'Bengaluru (BLR)' },
  { code: 'MAA', name: 'Chennai (MAA)' },
  { code: 'CCU', name: 'Kolkata (CCU)' },
  { code: 'HYD', name: 'Hyderabad (HYD)' },
  { code: 'PNQ', name: 'Pune (PNQ)' },
  { code: 'AMD', name: 'Ahmedabad (AMD)' },
];

export const DEPARTURE_TIMES = [
    'Early Morning (5am-8am)',
    'Morning (8am-12pm)',
    'Afternoon (12pm-4pm)',
    'Evening (4pm-8pm)',
    'Late Night (8pm-12am)',
];

export const DAYS_OF_WEEK = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

export const INITIAL_FLIGHT_DATA: FlightData = {
    airline: AIRLINES[0],
    origin: AIRPORTS[0].code,
    destination: AIRPORTS[1].code,
    departureTime: DEPARTURE_TIMES[1],
    dayOfWeek: DAYS_OF_WEEK[4]
};
