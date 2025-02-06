import { useState } from 'react';
import { sendMessageToAssistant } from '../services/aiAssistant';

export const useAssistant = () => {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    setIsLoading(true);
    try {
      const assistantResponse = await sendMessageToAssistant(message);
      setResponse(assistantResponse);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { response, isLoading, sendMessage };
};