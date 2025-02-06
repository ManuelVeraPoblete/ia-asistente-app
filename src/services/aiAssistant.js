import api from '../utils/api';

export const sendMessageToAssistant = async (message) => {
  try {
    const response = await api.post('/assistant', { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message to assistant:', error);
    throw error;
  }
};