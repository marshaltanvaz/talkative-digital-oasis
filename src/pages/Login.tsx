import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/Auth/LoginForm';
import { useAuth } from '../lib/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Check if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Skype Clone</h1>
          <p className="text-white/80">Connect with friends and family</p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
