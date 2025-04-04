
import React, { useState, KeyboardEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip, Smile, Mic, Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="flex items-end space-x-2">
      <Button variant="ghost" size="icon" className="flex-shrink-0 rounded-full">
        <Paperclip className="h-5 w-5" />
      </Button>
      
      <div className="relative flex-1">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="min-h-[3rem] max-h-[10rem] pr-10 resize-none"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 bottom-2"
        >
          <Smile className="h-5 w-5" />
        </Button>
      </div>
      
      {message.trim() ? (
        <Button 
          size="icon" 
          className="flex-shrink-0 rounded-full bg-skype hover:bg-skype-dark"
          onClick={handleSend}
        >
          <Send className="h-5 w-5" />
        </Button>
      ) : (
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex-shrink-0 rounded-full"
        >
          <Mic className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default MessageInput;
