"use client";

import React, { useState, useEffect } from 'react';
import "@honorlock/elements";

// Simulation des IDs pour chaque contexte
const contextIds = {
  course: '38a47339-d8ac-4fe6-8cf1-4404797af444',
  session: 'session-id-456',
  exam_results: 'exam-results-id-789',
  exam_settings: 'exam-settings-id-101',
  search_and_destroy: 'search-and-destroy-id-112',
};

const HonorlockComponent: React.FC = () => {
  const [contextType, setContextType] = useState<string>('course');
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiOTg1ZmE1OWY1Y2IyMmM4Y2Y0MzcxNThjMDcwNDg2ZDBjZmJlZGY4ZGJhOTQ3ODg4OTQxYWFhZDkyYWI3NjlhMzk3NDU3ZTEwODRmZjBhYTMiLCJpYXQiOjE3MTExMTM5NDcuNzk4NDIsIm5iZiI6MTcxMTExMzk0Ny43OTg0MjUsImV4cCI6MTcxMTExNTc0Ny43OTE0NjYsInN1YiI6IjcxMjM1Iiwic2NvcGVzIjpbXX0.MjB4xRAhX19BSqYtUbvRSNKfl9u-RpFtid3EFsMMMTx75DMODVHD2F62o3r2DwuWOT2ksEO4ZJY4C79ShORwF4y44g_-Qn4MOCMijTGWoWKEe5PyG7YuAAboVYfuMzUeNV3_LmA0L6gNP8V7irbFbm0OfKWCJ1moaiSwHrmoR-OMc1Myt8qBNtq27Ry6d7c9jY_hbS1Jmj12JfCM97pfPwhRDhBQU1VH4Kbn8EVA3KnFPF9TWBECL31SmzsMwFwFI85fgSeFV_8f36jhTFT_1I9yezL5yO5SrPyE-4uLwec0EJU8EIFUJI2hp-NwaBIRk5K5jPvODGXJIMhwHdU9FAYXv_8Re7nTKz5uTPbwLEhwCp4QohcFcWBt1y_hFbhLbW3mb28KD0SCRkX4_2_diMg4K_hV9-xGNpxfwPeZlw5O67HNAXVcU_ahiEHY_fV8zKkPHRvj-6Y-T5upapHNwEu95C2fOEV1vQRGbPSksC6T8ItzsXZcYozLpqCNOvWtZoyuvtSx6X9E4KwKsrD0cA-3DNWNIlz5OFpQUXd_E9jodQAuMuuIVoD5_oUfUClOoh6q29HQNSVIS1ETCwdsKMsmxR7lPTC_AArcwzvm7n2lXUyqIzINIx9zcvtE6G4XwUK9hazOCdE-Nej6yrpLIN6wvkmNWDwseoOTxqLs7Ko"; // Mettez votre token ici
    const contextId = contextIds[contextType as keyof typeof contextIds]; // Obtenez l'ID basé sur le type de contexte sélectionné

    const loadHonorlock = async () => {
      await import('@honorlock/elements');
       setTimeout(() => {
      
          window.HonorlockElements.init({
            token: token ?? '', // Add nullish coalescing operator to provide a default value
            debug: true,
            context: { type: contextType, id: contextId },
          });
          console.log(`Honorlock initialized with context type: ${contextType} and ID: ${contextId}`);
          setInitialized(true);
 
      },0);
    };

    loadHonorlock();
  }, [contextType]);

  const handleContextChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContextType(e.target.value);
    setInitialized(false); // Réinitialiser l'état d'initialisation lors du changement de contexte
  };

  return (
    <div>
      <h2>Honorlock Configuration</h2>
      <label htmlFor="contextType">Choose context type:</label>
      <select id="contextType" value={contextType} onChange={handleContextChange}>
        <option value="course">Course</option>
        <option value="session">Session</option>
        <option value="exam_results">Exam Results</option>
        <option value="exam_settings">Exam Settings</option>
        <option value="search_and_destroy">Search and Destroy</option>
      </select>
      {initialized && <p>Honorlock has been initialized for context type "{contextType}"</p>}
      <honorlock-elements></honorlock-elements>
    </div>
  );
};

export default HonorlockComponent;


