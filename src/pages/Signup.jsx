import React, { useState } from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom';



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = (e) => {
      e.preventDefault();
      // Handle signup logic here
    };
  
    return (
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account ? <Link to='/signin' >Login</Link></p>
        </form>
      </div>
    );
  };
  
export default Signup;