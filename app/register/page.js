"use client";

// import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { auth } from '../utils/firebase'; // Ensure this path is correct for your project structure

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/home'); // Redirect to dashboard or preferred route after registration
    } catch (error) {
      console.error("Error creating account with email and password", error.message);
      alert("Failed to create account: " + error.message);
    }
  };

  // Define styles here
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: '600',
    color: '#0047AB',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    marginBottom: '30px',
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
        <h2 className="text-2xl font-bold text-center text-white mb-6">Register Your Account</h2>
        <form onSubmit={handleRegister} className="space-y-6">

          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom-blue focus:border-custom-blue"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <button
            type="submit"
            className="w-full bg-white hover:bg-white text-custom-blue font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            onClick={() =>router.push("/login")}
          >
            Already have an account? Login!
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