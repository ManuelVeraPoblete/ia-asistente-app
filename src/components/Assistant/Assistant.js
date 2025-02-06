import React, { useState } from 'react';
import styled from 'styled-components';
import { useAssistantContext } from '../../contexts/AssistantContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Response = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  width: 300px;
`;

const Assistant = () => {
  const [message, setMessage] = useState('');
  const { response, isLoading, sendMessage } = useAssistantContext();

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <Container>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <Button onClick={handleSendMessage} disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
      {response && <Response>{response}</Response>}
    </Container>
  );
};

export default Assistant;