import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
  
    const handleSignup = (e) => {
      setLoading(true)
      e.preventDefault();
      const data = {email,password,name}
      axios.post("http://localhost:8080/user/signup",data)
      .then((res)=>{
        setLoading(false)
        alert("Registered Successfull")
        navigate('/signin');
      })
      .catch((err)=>console.log(err))
      setLoading(false)
    };
  
    return (
      <div className="signup-form-container">
        <form className="signup-form" >
          <h2>Sign Up Test</h2>
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
          <button onClick={handleSignup} type="submit" disabled={loading}>{loading ? 'Loading...' : 'Signup'}</button>
          <p>Already have an account ? <Link to='/signin' >Login</Link></p>
        </form>
      </div>
    );
  };
  
export default Signup;