export interface FlightData {
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  dayOfWeek: string;
}

export enum PredictionStatus {
    ON_TIME = 'ON_TIME',
    DELAYED = 'DELAYED',
}

export interface PredictionResultData {
  prediction: PredictionStatus;
  predictedDelayMinutes: number; // Predicted delay in minutes. 0 if on time.
  reason: string;
}