"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { generateChatResponse } from "@/app/actions/chat";

type Message = {
  role: "user" | "model";
  parts: { text: string }[];
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      parts: [{ text: "Hello! I'm the ATMA AI Assistant. How can I help you today?" }]
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", parts: [{ text: input.trim() }] };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Prepare history for API (excluding the initial greeting if we want, but fine to include)
    const history = [...messages, userMessage];

    const response = await generateChatResponse(history);
    
    setIsLoading(false);
    
    if (response.error) {
      setMessages(prev => [...prev, { role: "model", parts: [{ text: response.error! }] }]);
    } else if (response.text) {
      setMessages(prev => [...prev, { role: "model", parts: [{ text: response.text || "Sorry, I couldn't generate a response." }] }]);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-110 flex items-center justify-center 
          bg-primary-dark border border-accent/30 text-accent
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] 
          bg-primary-dark border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary-deeper border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary-light text-sm">ATMA Assistant</h3>
              <p className="text-[10px] text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-primary-light transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-noise bg-primary-dark/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-6 h-6 rounded-full bg-surface-light border border-border flex items-center justify-center text-muted flex-shrink-0 mt-1">
                  <Bot className="w-3 h-3" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === 'user'
                    ? 'bg-accent text-primary-dark rounded-tr-sm'
                    : 'bg-surface border border-border text-primary-light rounded-tl-sm'
                }`}
              >
                {msg.parts[0].text}
              </div>
              
              {msg.role === 'user' && (
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                  <User className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
               <div className="w-6 h-6 rounded-full bg-surface-light border border-border flex items-center justify-center text-muted flex-shrink-0 mt-1">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="bg-surface border border-border rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-primary-deeper border-t border-border">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-surface border border-border text-primary-light text-sm rounded-full pl-4 pr-12 py-2.5 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-1.5 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
