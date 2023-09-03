//pages/Login/Login

import React, { useState } from 'react';
import { TextInput } from '../../components/Input/TextInput/TextInput';
import { Button } from '../../components/Button/Button';
//import { useNavigate } from 'react-router-dom';

export type LoginProps = {
  handleLogin: (redirectPath: string) => void;
};

const Login = ({ handleLogin }: LoginProps) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //const navigate = useNavigate();

  const handleLoginClick = () => {
    if (userName.trim() !== '' && password.trim() !== '') {
      console.log('Login success');
      localStorage.setItem('token', 'example_token');
      // navigate('/dashboard');
      handleLogin('/dashboard');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="p-8 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-accent">
            Login
          </h1>
          <form className="space-y-4">
            <TextInput
              type="text"
              label="Username"
              placeholder="Enter Username"
              onChange={(e) => setUserName(e.target.value)}
            />

            <div className="pb-4">
              <TextInput
                type="password"
                label="Password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-center">
              <Button
                title="LOGIN"
                onClick={handleLoginClick}
                color="accent"
                size="wide"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
