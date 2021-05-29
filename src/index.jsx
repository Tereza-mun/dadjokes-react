import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke/index';
import './jokes.js';
import { jokes } from './jokes.js';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            userName={joke.name}
            userAvatar={joke.avatar}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
