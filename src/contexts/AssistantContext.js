import React, { createContext, useContext } from 'react';
import { useAssistant } from '../hooks/useAssistant';

const AssistantContext = createContext();

export const AssistantProvider = ({ children }) => {
  const assistant = useAssistant();

  return (
    <AssistantContext.Provider value={assistant}>
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistantContext = () => useContext(AssistantContext);