import React, { useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
  
    const handleSignup = (e) => {
      e.preventDefault();
      setLoading(true)  
      const data = {email,password}
      axios.post("http://localhost:8080/user/signin",data)
      .then((res)=>{
        localStorage.setItem("mytoken",JSON.stringify(res.data.token))
        setLoading(false)
        alert("login successfull")
        navigate('/');
      })
      .catch((err)=>alert("wrong credentials"))
      setLoading(false)
    };
  
    return (
      <div className="signup-form-container">
        <form className="signup-form" >
          <h2>Sign In</h2>
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
          <button onClick={handleSignup} disabled={loading} >{loading ? 'Loading...' : 'Signin'}</button>
          <p>Register an account ? <Link to='/signup' >Signup</Link></p>
        </form>
      </div>
    );
  };
  
export default Signin;