import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Display.css';
export default function Landing(){
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('usere');
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');
  const [score, setScore] = useState('');
  const [progressBarValues, setProgressBarValues] = useState({
    progress1: 40,
    progress2: 20,
    progress3: 60,
  });

  const handlePostRequest = async () => {
    try {
      // Send a POST request to the Flask API endpoint
      const response = await axios.post('http://localhost:5000/api/post_data', {
        textareaValue,
        selectedValue,
        inputValue,
      });

      // Handle the response from the API
      console.log('API Response:', response.data);

      // Update state based on the API response
      setResponseText(response.data.responseText);
      setScore(response.data.score);
      setProgressBarValues({
        progress1: response.data.progress1,
        progress2: response.data.progress2,
        progress3: response.data.progress3,
      });
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };
    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navo" href="#">SENTIFY</a>
            </div>
          </nav>
          <div class="social-icons">
            <a href="#" title="twitter"> 
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
          </div>
          <p class="quer">Query :-</p>
          <textarea class="fro-area" value={textareaValue} placeholder="Enter your query : " ></textarea>
          <label for="modr" id="ki">Enter your mode:</label>
          <select name="modr" id="car" value={selectedValue} >
            <option value="usere">User</option>
            <option value="hash">Hashtag</option>
            </select>
            <label for="num" value="nume" id="fd">Number : </label>
            <input type="number" name="num" value={inputValue}></input>
          
          <input type="submit" value="Submit" class="valu" onClick={handlePostRequest}/>
          <textarea id="hello" readOnly={true}></textarea>
          <label for="score" >Score : </label>
          <input type="text" name="score" id="sco" readOnly={true}></input>
          <div class="progress-bar-container">
          <ProgressBar striped variant="success" now={40} className="progress-bar-margin"/>
          <ProgressBar striped variant="info" now={20} />
          <ProgressBar striped variant="warning" now={60} />
          </div>
          <input type="text" name="score" id="scop" readOnly={true}></input>
          </div>
    )}