import React from 'react';
import { AssistantProvider } from './contexts/AssistantContext';
import Assistant from './components/Assistant/Assistant';

function App() {
  return (
    <AssistantProvider>
      <div className="App">
        <h1>Asistente Virtual con IA</h1>
        <Assistant />
      </div>
    </AssistantProvider>
  );
}

export default App;