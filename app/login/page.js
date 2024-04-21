"use client";

// import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { auth } from '../utils/firebase'; // Corrected import statement

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to dashboard or preferred route after login
    } catch (error) {
      console.error("Error signing in with password and email", error.message);
      alert("Failed to log in: " + error.message);
    }
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  };

  const headerStyle = {
    fontSize: '36px', // Larger font size
    fontWeight: '600', // Bold font weight
    color: '#0047AB', // Bright color
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)', // Text shadow for depth
    marginBottom: '30px', // More space below the header
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0052cc',
    color: 'white',
    cursor: 'pointer',
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-radial from-light-gray to-white">
      <div className="w-full max-w-md p-10 bg-navy rounded-xl shadow-custom">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          
              <input
              placeholder='Email Address'
                type="email"
                id="email"
                className="input-field w-full focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
              placeholder='password'
                type="password"
                id="password"
                className="w-full input-field focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Forgot Password
          </button>
          <button
            type="submit"
            className="w-full bg-white hover:bg-white text-custom-blue font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            onClick={() =>router.push("/")}
          >
            Continue as a Guest
          </button>
        </form>
        
      </div>

    </div>
    
  );
}