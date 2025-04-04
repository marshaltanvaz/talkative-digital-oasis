import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Video, MoreHorizontal } from 'lucide-react';
import CustomAvatar from '../UI/CustomAvatar';
import StatusBadge, { UserStatus } from '../UI/StatusBadge';
import MessageInput from './MessageInput';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isOwnMessage: boolean;
}

const ChatWindow: React.FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const contact = {
    id: contactId || '1',
    name: contactId === '1' ? 'Alice Johnson' : 
           contactId === '2' ? 'Bob Smith' : 
           contactId === '3' ? 'Carol White' : 
           contactId === '4' ? 'David Miller' : 
           contactId === '5' ? 'Emma Davis' : 'Frank Wilson',
    status: (contactId === '1' || contactId === '5') ? 'online' : 
             contactId === '2' ? 'away' : 
             contactId === '3' ? 'busy' : 'offline' as UserStatus
  };
  
  useEffect(() => {
    setMessages([]);
    
    const mockMessages: Message[] = [
      {
        id: '1',
        text: `Hi there! This is a conversation with ${contact.name}.`,
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        isOwnMessage: false
      },
      {
        id: '2',
        text: `Hey ${contact.name}! How are you doing?`,
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        isOwnMessage: true
      },
      {
        id: '3',
        text: "I'm doing well, thanks for asking! How about you?",
        timestamp: new Date(Date.now() - 1000 * 60 * 25),
        isOwnMessage: false
      },
      {
        id: '4',
        text: "I'm good too. Just working on that project we discussed yesterday.",
        timestamp: new Date(Date.now() - 1000 * 60 * 20),
        isOwnMessage: true
      },
      {
        id: '5',
        text: "Great! Let me know if you need any help with it.",
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        isOwnMessage: false
      },
    ];
    
    setTimeout(() => {
      setMessages(mockMessages);
    }, 300);
  }, [contactId, contact.name]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      isOwnMessage: true,
    };
    
    setMessages([...messages, newMessage]);
    
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message: "${text}"`,
        timestamp: new Date(),
        isOwnMessage: false,
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000 + Math.random() * 2000);
  };
  
  const formatTimestamp = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    
    if (diffMins < 1) {
      return 'Just now';
    } else if (diffMins < 60) {
      return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    } else if (diffMins < 24 * 60) {
      const hours = Math.floor(diffMins / 60);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit' 
      });
    }
  };
  
  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <div className="relative">
            <CustomAvatar alt={contact.name} />
            <StatusBadge status={contact.status} />
          </div>
          <div className="ml-3">
            <h3 className="font-medium">{contact.name}</h3>
            <p className="text-xs text-muted-foreground">
              {contact.status === 'online' ? 'Active now' : 'Last seen recently'}
            </p>
          </div>
        </div>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            <p>Start a conversation with {contact.name}</p>
          </div>
        ) : (
          messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.isOwnMessage ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex flex-col space-y-1 max-w-[75%]">
                <div className={message.isOwnMessage ? 'chat-bubble-sent' : 'chat-bubble-received'}>
                  {message.text}
                </div>
                <span className="text-xs text-muted-foreground px-2">
                  {formatTimestamp(message.timestamp)}
                </span>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
