import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomAvatar from '../UI/CustomAvatar';
import StatusBadge, { UserStatus } from '../UI/StatusBadge';
import { cn } from '@/lib/utils';

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  status: UserStatus;
  lastMessage?: string;
  unread?: number;
  lastSeen?: string;
}

interface ContactListProps {
  showStatus?: boolean;
  className?: string;
}

const ContactList: React.FC<ContactListProps> = ({ 
  showStatus = false,
  className 
}) => {
  const navigate = useNavigate();
  
  // Mock contacts data
  const contacts: Contact[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      status: 'online',
      lastMessage: 'Hey, how are you doing?',
      unread: 2,
      lastSeen: '2 min ago'
    },
    {
      id: '2',
      name: 'Bob Smith',
      status: 'away',
      lastMessage: 'Can we schedule a meeting tomorrow?',
      lastSeen: '15 min ago'
    },
    {
      id: '3',
      name: 'Carol White',
      status: 'busy',
      lastMessage: 'I sent you the files you requested.',
      lastSeen: '1 hour ago'
    },
    {
      id: '4',
      name: 'David Miller',
      status: 'offline',
      lastMessage: 'Thanks for your help!',
      lastSeen: '5 hours ago'
    },
    {
      id: '5',
      name: 'Emma Davis',
      status: 'online',
      lastMessage: 'Let\'s catch up soon.',
      lastSeen: 'Just now'
    },
    {
      id: '6',
      name: 'Frank Wilson',
      status: 'offline',
      lastMessage: 'See you next week.',
      lastSeen: '1 day ago'
    },
  ];
  
  const handleContactClick = (contactId: string) => {
    navigate(`/dashboard/chat/${contactId}`);
  };
  
  return (
    <div className={cn("divide-y", className)}>
      {contacts.map((contact) => (
        <div 
          key={contact.id}
          className="contact-item"
          onClick={() => handleContactClick(contact.id)}
        >
          <div className="relative">
            <CustomAvatar alt={contact.name} src={contact.avatar} />
            {showStatus && <StatusBadge status={contact.status} />}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h4 className="font-medium truncate">{contact.name}</h4>
              {!showStatus && contact.lastSeen && (
                <span className="text-xs text-muted-foreground">{contact.lastSeen}</span>
              )}
            </div>
            
            {!showStatus && contact.lastMessage && (
              <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
            )}
            
            {showStatus && (
              <p className="text-xs text-muted-foreground">
                {contact.status === 'online' ? 'Active now' : contact.lastSeen}
              </p>
            )}
          </div>
          
          {!showStatus && contact.unread && contact.unread > 0 && (
            <div className="flex-shrink-0 rounded-full bg-skype text-white text-xs w-5 h-5 flex items-center justify-center">
              {contact.unread}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
