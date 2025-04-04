
import React from 'react';
import { cn } from '@/lib/utils';

export type UserStatus = 'online' | 'away' | 'busy' | 'offline';

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const statusClasses = {
    online: 'status-online',
    away: 'status-away',
    busy: 'status-busy',
    offline: 'status-offline'
  };
  
  return (
    <span className={cn(
      "status-badge",
      statusClasses[status],
      className
    )} />
  );
};

export default StatusBadge;
