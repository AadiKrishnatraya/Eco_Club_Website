import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, RotateCcw, ChevronDown, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Magnetic } from './Magnetic.tsx';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const SUGGESTED_QUERIES = [
  'How can I join Eco Club?',
  'What is the club motto?',
  'Tell me about the Eco Hackathon',
  'What is the Eco Treasure Hunt?',
  'What divisions can I work in?',
];

export const EcoBotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hello! I am EcoBot, your AI guide for Eco Club at ABES Engineering College. Ask me anything about our sustainability mission, upcoming events (like the Eco Treasure Hunt and Hackathon), our divisions, or how you can join!',
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ecobot', handleOpen);
    return () => window.removeEventListener('open-ecobot', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || data.error || 'Thank you for asking! Please let me know if you have more questions.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('EcoBot communication error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          role: 'assistant',
          content:
            "I'm having a little trouble connecting right now, but feel free to explore our Join Us section or check out our official Instagram @abes_ecoclub for instant club updates!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content:
          'Conversation reset. Feel free to ask another query regarding Eco Club ABES EC, membership, or campus green initiatives!',
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* Floating Widget Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Magnetic strength={0.25} maxDistance={10}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl border border-emerald-600/30 dark:border-emerald-400/30 transition-all cursor-pointer group"
            aria-label="Open EcoBot AI Chat"
            title="Ask EcoBot anything about Eco Club"
          >
            <div className="relative flex items-center justify-center">
              <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Ask EcoBot
            </span>
          </motion.button>
        </Magnetic>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[640px] h-[82vh] apple-card bg-white/95 dark:bg-[#0e1410]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-emerald-50/70 dark:bg-emerald-950/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      EcoBot
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      AI Guide
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                    Eco Club · ABES Engineering College
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                  title="Clear conversation"
                  aria-label="Clear chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-emerald-800 text-white rounded-br-xs shadow-sm font-medium'
                          : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-stone-100 rounded-bl-xs border border-slate-200 dark:border-white/5 font-normal'
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1 font-mono">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 p-3 rounded-2xl w-fit border border-slate-200 dark:border-white/5">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse delay-150" />
                  <span className="ml-1 font-medium">EcoBot is thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Chips (if conversation is fresh) */}
            {messages.length <= 3 && (
              <div className="px-4 py-2 border-t border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Suggested Queries
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUERIES.map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(query)}
                      className="text-[11px] font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-100/70 hover:bg-emerald-200 dark:bg-emerald-950/70 dark:hover:bg-emerald-900/90 border border-emerald-300/60 dark:border-emerald-700/50 px-2.5 py-1 rounded-full transition-colors cursor-pointer text-left"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3.5 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0e1410]/95"
            >
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about events, joining, mission..."
                  className="w-full pl-3.5 pr-11 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.07] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 p-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white disabled:opacity-40 transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-2 text-[10px] text-center text-slate-500 dark:text-slate-400">
                EcoBot answers queries based on Eco Club ABES EC mission & guidelines.
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
