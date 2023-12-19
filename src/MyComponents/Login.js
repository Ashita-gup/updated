/* global firebase */
import React, { useState } from 'react';
import { auth } from '../firebase'; 
import './Login.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index2 from './Index2';
import Index3 from './Index3';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('Login successful');
      // You can redirect the user or perform other actions on successful login
    } catch (error) {
        console.error('Login failed', error.message);
      // You can provide user feedback on login failure here
    }
  };
    return (
    <div class="front-side">
        <div class="side-bar">
            <img src="login_side.webp" align="left" class="side-img" height="100%" width="100%"></img>
        </div>
        <div class="main-sec">
        <h2 class="main-head">Welcome to Sentify! <span class="wave">👋</span></h2>
        <p class="mcl">Please sign-in to your account and start the adventure</p>
        <label for="email" class="main-mail">Email</label><br></br>
        <input type="email" id="email" class="mail-cl" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email :)"></input><br></br><br></br>
        <label for="pwd" class="main-pass">Password</label><br></br>
        <input type="password" id="pwd" class="pass-cl" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password :)"></input><br></br><br></br>
        <input type="checkbox" name="opt" id="opt" class="chk"></input>
        <label for="opt" class="main-opt">Remember me </label><Link to="/about" class="fgp">Forgot password ?</Link><br></br><br></br>
        <input type="submit" value="Login" class="fnl" onClick={handleLogin}></input>
        <p class="ques">New on our platform?</p>
        <Link to="/contact" class="ln">Create an account</Link>
        <h2 class="hr-lines">OR</h2>
        <i class="fa fa-google circle"></i>
        
        
        </div>
        <Routes>
          <Route path="/about" element={<Index2 />} />
          <Route path="/contact" element={<Index3 />} />
        </Routes>
    </div>
    )
    }
