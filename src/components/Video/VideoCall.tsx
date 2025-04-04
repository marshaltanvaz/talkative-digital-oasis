import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Video, VideoOff, Phone, X, Users, MessageCircle, MoreVertical } from 'lucide-react';
import CustomAvatar from '../UI/CustomAvatar';

const VideoCall: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // In a real app, this would be dynamic based on call participants
  const callerName = "Alice Johnson";
  
  return (
    <div className="h-full flex flex-col">
      {/* Call status bar */}
      <div className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="animate-pulse inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span>Call in progress • 00:03:45</span>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/10"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? <X className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Video container */}
      <div className="flex-1 bg-black relative">
        {/* Large video (remote user) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isFullscreen ? (
            <div className="video-container w-full h-full">
              {/* This would be a real video stream in a full implementation */}
              <div className="flex items-center justify-center h-full text-white">
                <CustomAvatar size="xl" alt={callerName} />
                <h3 className="mt-4 text-lg font-medium">{callerName}</h3>
              </div>
            </div>
          ) : (
            <div className="video-container w-5/6 h-5/6">
              {/* This would be a real video stream in a full implementation */}
              <div className="flex flex-col items-center justify-center h-full text-white">
                <CustomAvatar size="xl" alt={callerName} />
                <h3 className="mt-4 text-lg font-medium">{callerName}</h3>
              </div>
            </div>
          )}
        </div>
        
        {/* Small video (self view) */}
        <div className="absolute bottom-4 right-4 w-48 h-36 rounded-lg overflow-hidden border-2 border-white">
          <div className="video-container w-full h-full">
            {/* This would be your own video stream */}
            {isVideoOff ? (
              <div className="bg-gray-800 h-full flex items-center justify-center">
                <CustomAvatar size="lg" alt="You" />
              </div>
            ) : (
              <div className="bg-gray-700 h-full"></div>
            )}
          </div>
        </div>
      </div>
      
      {/* Call controls */}
      <div className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
          >
            <Users className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/10"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full ${isMuted ? 'bg-white/20' : 'hover:bg-white/10'}`}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full ${isVideoOff ? 'bg-white/20' : 'hover:bg-white/10'}`}
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
          </Button>
          
          <Button 
            size="icon" 
            className="rounded-full bg-red-500 hover:bg-red-600"
          >
            <Phone className="h-5 w-5 rotate-[135deg]" />
          </Button>
        </div>
        
        <div className="w-[88px]">
          {/* Empty div to balance the flex layout */}
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
