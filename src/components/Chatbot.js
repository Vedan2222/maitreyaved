import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    // Simple pattern matching for intent classification
    const patterns = {
        general: [/buddhism/i, /what is buddhism/i, /tell me about buddhism/i],
        buddha: [/buddha/i, /who was buddha/i, /siddhartha/i, /gautama/i],
        teachings: [/noble truth/i, /dharma/i, /teaching/i, /eightfold/i],
        practice: [/meditation/i, /meditate/i, /practice/i, /how to/i],
    };

    const findIntent = (message) => {
        for (const [intent, patternList] of Object.entries(patterns)) {
            if (patternList.some(pattern => pattern.test(message))) {
                return intent;
            }
        }
        return 'default';
    };

    const getResponseByCategory = (category) => {
        const responses = {
            general: [
                "Buddhism is a path of practice and spiritual development leading to insight into the true nature of reality.",
                "Buddhism is one of the world's major religions, focusing on personal spiritual development and attainment of deep insight."
            ],
            buddha: [
                "Buddha was born as Siddhartha Gautama in Nepal around 2,500 years ago.",
                "The Buddha was a spiritual teacher who reached enlightenment through meditation and understanding."
            ],
            teachings: [
                "The Four Noble Truths are the foundation of Buddhist teachings.",
                "Buddhism teaches that suffering arises from attachment and can be overcome through the Eightfold Path."
            ],
            practice: [
                "Meditation is a key practice in Buddhism for developing mindfulness and wisdom.",
                "Buddhist practice includes meditation, ethical conduct, and wisdom development."
            ],
            default: [
                "I apologize, but I'm not sure I understand. Could you please rephrase your question about Buddha or Buddhism?"
            ]
        };

        const categoryResponses = responses[category] || responses.default;
        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
    };

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        // Add user message
        const userMessage = { text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);

        // Process message and get response
        const intent = findIntent(inputText);
        const response = getResponseByCategory(intent);

        // Add bot response
        const botMessage = { text: response, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);

        // Clear input
        setInputText('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={`chatbot ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-header">
                <h3>Buddhist Guide</h3>
                <button onClick={onClose}>×</button>
            </div>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask a question about Buddhism..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot; 