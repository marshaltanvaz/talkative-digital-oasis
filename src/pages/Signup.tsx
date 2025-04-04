import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '../components/Auth/SignUpForm';
import { useAuth } from '../lib/AuthContext';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Skype Clone</h1>
          <p className="text-white/80">Create your account</p>
        </div>
        
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup; 