import React, { useState } from 'react';
import saveAs from 'file-saver';

function ChatHistory() {
  const [apiKey, setApiKey] = useState('');
  const [chatHistory, setChatHistory] = useState('');

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  const retrieveAndSaveChatHistory = async () => {
    try {
      // Make API requests to retrieve chat history using the apiKey
      const chatHistoryData = await fetch('API_ENDPOINT', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (chatHistoryData.ok) {
        const chatHistoryBlob = await chatHistoryData.blob();

        // Save chat history to a file using FileSaver.js
        saveAs(chatHistoryBlob, 'chat_history.txt');

        setChatHistory('Chat history retrieved and saved.');
      } else {
        setChatHistory('Failed to retrieve chat history.');
      }
    } catch (error) {
      console.error('Error:', error);
      setChatHistory('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Retrieve and Save Chat History</h1>
      <input
        type="text"
        placeholder="Enter API Key"
        value={apiKey}
        onChange={handleApiKeyChange}
      />
      <button onClick={retrieveAndSaveChatHistory}>Retrieve and Save Chat History</button>
      <p>{chatHistory}</p>
    </div>
  );
}

export default ChatHistory;
