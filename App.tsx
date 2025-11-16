
import React, { useState } from 'react';
import { FlightData, PredictionResultData } from './types';
import { predictFlightDelay } from './services/geminiService';
import { INITIAL_FLIGHT_DATA } from './constants';
import Header from './components/Header';
import FlightForm from './components/FlightForm';
import PredictionResult from './components/PredictionResult';

const App: React.FC = () => {
  const [flightData, setFlightData] = useState<FlightData>(INITIAL_FLIGHT_DATA);
  const [prediction, setPrediction] = useState<PredictionResultData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFlightData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPrediction(null);
    try {
      const result = await predictFlightDelay(flightData);
      setPrediction(result);
    } catch (err) {
      setError('Failed to get prediction. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Enter Flight Details</h2>
            <FlightForm
              flightData={flightData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 min-h-[300px] flex items-center justify-center">
             <PredictionResult 
                prediction={prediction}
                isLoading={isLoading}
                error={error}
             />
          </div>
        </div>
        <footer className="text-center mt-12 text-slate-500 dark:text-slate-400 text-sm">
          <p>Flight Delay Predictor &copy; 2024. Predictions are simulated for illustrative purposes.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
