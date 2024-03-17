'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaEye } from 'react-icons/fa';
import React, { useState } from 'react';
const LoginSignupComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Log in' : 'Sign up'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex flex-col gap-2 rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="outline-none w-full px-4 py-2 border border-gray-300 rounded-t-md"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <button
                type="button"
                onClick={handleShowPassword}
                className="absolute top-3 right-5"
              >
                <FaEye />
              </button>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="outline-none w-full px-4 py-2 border border-gray-300 rounded-t-md"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLogin ? 'Log in' : 'Sign up'}
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            className="font-medium text-indigo-600 hover:text-indigo-500 mx-2"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupComponent;
