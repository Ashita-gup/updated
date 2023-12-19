import React from 'react';
import styles from './index3.css';
export default function Index3(){
    return (
    <div class="front-side">
        <div class="side-bar">
            <img src="forgot.jpg" align="left" class="side-img" height="100%" width="100%"></img>
        </div>
        <div class="main-sec">
        <h2 class="main-head">Forgot Password? </h2>
        <p class="main-p">Enter your email and we′ll send you instructions to reset your password</p>
        <label for="email" class="main-mail">Email</label><br></br>
        <input type="email" id="email" class="mail-cl" name="email" placeholder="user@email.com"></input><br></br><br></br>
        <input type="submit" value="Send reset link" class="fnl"></input>
        <a href="./index1.html" class="ln">Back to login</a>
        
        
       
        
        </div>
    </div>)
    }
