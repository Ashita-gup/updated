import React from 'react';
import styles from './index2.css';
export default function Index2(){
    return (
    <div class="front-side">
        <div class="side-bar">
            <img src="tr.webp" align="left" class="side-img" height="98%" width="100%"></img>
        </div>
        <div class="main-sec">
        <h2 class="main-head">Adventure starts here </h2><p class="ro">&#128640;</p>
        <p class="main-p">Make your app management easy and fun!</p>
        <label for="user" class="main-user">Username</label><br></br>
        <input type="text" id="user" class="main-user-in" name="user" placeholder="johndoe"></input><br></br><br></br>
        <label for="email" class="main-mail">Email</label><br></br>
        <input type="email" id="email" class="mail-cl" name="email" placeholder="user@email.com"></input><br></br><br></br>
        <label for="pwd" class="main-pass">Password</label><br></br>
        <input type="password" id="pwd" class="pass-cl" name="pwd"></input><br></br><br></br>
        <input type="checkbox" name="opt" id="opt" class="chk"></input>
        <label for="opt" class="main-opt">I agree to privacy policy & terms </label><br></br><br></br>
        <input type="submit" value="Signup" class="fnl"></input>
        <p class="ques">Already have an account?</p>
        <a href="./index1.html" class="ln">Sign in instead</a>
        
        <h2 class="hr-lines">OR</h2>
        <i class="fa fa-google circle"></i>
        
       
        
        </div>
    </div>)
    }

