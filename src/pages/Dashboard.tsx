
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChatWindow from '../components/Chat/ChatWindow';
import VideoCall from '../components/Video/VideoCall';

const Dashboard: React.FC = () => {
  return (
    <div className="h-full">
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="chat/:contactId" element={<ChatWindow />} />
        <Route path="call/:contactId" element={<VideoCall />} />
      </Routes>
    </div>
  );
};

// Home screen when no chat is selected
const DashboardHome: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-muted/20">
      <h1 className="text-3xl font-bold text-skype mb-4">Welcome to Skype Clone</h1>
      <p className="text-muted-foreground max-w-md">
        Select a conversation from the sidebar to start chatting, 
        or click on the call buttons to start a voice or video call.
      </p>
    </div>
  );
};

export default Dashboard;
