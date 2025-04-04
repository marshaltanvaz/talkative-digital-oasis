import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ContactList from '../Chat/ContactList';
import CustomAvatar from '../UI/CustomAvatar';
import StatusBadge, { UserStatus } from '../UI/StatusBadge';
import { Settings, MessageCircle, Phone, Video, Search, ChevronLeft } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const [userStatus, setUserStatus] = useState<UserStatus>('online');
  
  // Mock user data
  const user = {
    name: 'Demo User',
    email: 'demo@example.com',
    avatar: null,
    status: userStatus
  };
  
  const statuses: { label: string; value: UserStatus }[] = [
    { label: 'Online', value: 'online' },
    { label: 'Away', value: 'away' },
    { label: 'Do Not Disturb', value: 'busy' },
    { label: 'Offline', value: 'offline' }
  ];
  
  const handleStatusChange = (status: UserStatus) => {
    setUserStatus(status);
  };

  return (
    <aside className={`border-r bg-sidebar h-full flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-80'}`}>
      <div className="p-4 border-b flex items-center">
        <div className="relative">
          <CustomAvatar size="md" alt={user.name} src={user.avatar || undefined} />
          <StatusBadge status={user.status} />
        </div>
        
        {!collapsed && (
          <div className="ml-3 flex-1 overflow-hidden">
            <h3 className="font-medium truncate">{user.name}</h3>
            <div className="flex items-center">
              <select
                value={user.status}
                onChange={(e) => handleStatusChange(e.target.value as UserStatus)}
                className="text-xs bg-transparent text-muted-foreground outline-none cursor-pointer"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle} 
          className="ml-auto"
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      {collapsed ? (
        <div className="flex flex-col items-center gap-4 py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Chats</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Phone className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Calls</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Settings className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : (
        <>
          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-8" 
              />
            </div>
          </div>
          
          <Tabs defaultValue="chats" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="calls">Calls</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chats" className="flex-1 overflow-y-auto">
              <ContactList />
            </TabsContent>
            
            <TabsContent value="calls" className="flex-1 overflow-y-auto p-4">
              <p className="text-center text-muted-foreground">No recent calls</p>
            </TabsContent>
            
            <TabsContent value="contacts" className="flex-1 overflow-y-auto">
              <ContactList showStatus={true} />
            </TabsContent>
          </Tabs>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
