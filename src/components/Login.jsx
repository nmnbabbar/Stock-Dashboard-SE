import React, { useState } from 'react';

const Login = ({ setFlag }) => {
  const [creds, setCreds] = useState({
    username: '',
    password: ''
  });
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleLogin = () => {
    if (creds.username === 'nmn' && creds.password === '123') {
      setFlag(false);
    } else {
      setInvalidLogin(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreds((prevCreds) => ({
      ...prevCreds,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col h-[100vh] space-y-4 justify-center bg-[#181c24]">

      
      <h1 className='text-6xl font-medium mx-auto mb-5px text-white'>Welcome Back</h1>
      <input
        type="text"
        name="username"
        value={creds.username}
        onChange={handleInputChange}
        placeholder="Username"
        className="border border-gray-300 px-4 py-2 rounded-md w-96 mx-auto"
      />
      <input
        type="password"
        name="password"
        value={creds.password}
        onChange={handleInputChange}
        placeholder="Password"
        className="border w-96 px mx-auto border-gray-300 px-4 py-2 rounded-md"
      />
      {invalidLogin && (
        <div className="text-red-500 text-center">Invalid login credentials. Please try again.</div>
      )}
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto">
        Login
      </button>
    </div>
  );
};

export default Login;
