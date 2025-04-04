import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../lib/AuthContext';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [user, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="flex-1 bg-gradient-to-b from-black to-red-600 flex items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Connect with Friends and Family
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-slide-in">
            Stay in touch with free messaging, voice & video calls, and screen sharing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => navigate('/login')}
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              Sign In
            </Button>
            
            <Button 
              onClick={() => navigate('/login')}
              variant="default" 
              size="lg"
              className="bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="bg-black text-white py-12">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Messaging</h3>
              <p className="text-gray-300">
                Send text messages, emojis, and share files with your contacts in real-time.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Voice Calls</h3>
              <p className="text-gray-300">
                Make high-quality voice calls to anyone in the world for free.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" d="M15.75 10.5 21 3m-3 3-3 7.5-3-7.5M12 21l-8.25-9 8.25-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Video Conferencing</h3>
              <p className="text-gray-300">
                Connect face-to-face with crystal clear video calls and screen sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
          <Button 
            onClick={() => navigate('/login')}
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Try Skype Clone Now
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Skype Clone - Built with React, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
