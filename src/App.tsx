import { Toaster } from "src/components/ui/toaster.tsx";
import { Toaster as Sonner } from "src/components/ui/sonner.tsx";
import { TooltipProvider } from "src/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "src/pages/Login.tsx";
import Signup from "src/pages/Signup.tsx";
import Dashboard from "src/pages/Dashboard.tsx";
import MainLayout from "src/components/Layout/MainLayout.tsx";
import NotFound from "src/pages/NotFound.tsx";
import { AuthProvider } from "src/lib/AuthContext.tsx";
import { ProtectedRoute } from "src/components/Auth/ProtectedRoute.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="chat/:contactId" element={<Dashboard />} />
              <Route path="call/:contactId" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
