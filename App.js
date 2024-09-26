import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokeCard from './JokeCard';
import './App.css';

const App = () => {
  const [jokes, setJokes] = useState([]);

  // Fetch jokes from the API
  useEffect(() => {
    axios.get('https://official-joke-api.appspot.com/random_ten')
      .then(response => {
        setJokes(response.data);
      })
      .catch(error => console.error('Error fetching jokes:', error));
  }, []);

  return (
    <div className="app">
      <h1>Flippable Joke Cards</h1>
      <div className="card-container">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} setup={joke.setup} punchline={joke.punchline} />
        ))}
      </div>
    </div>
  );
};

export default App;
