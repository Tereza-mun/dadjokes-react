import React from 'react';
import { render } from 'react-dom';
import './style.css';
import likeUp from './img/like-up.png';
import likeDown from './img/like-down.png';
import user1 from './img/user01.png';

const App = () => {
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={user1} />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>

        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up">
            {likeUp}
          </button>
          <span id="likes-up" className="likes-count likes-count--up">
            0
          </span>
          <button id="btn-down" className="btn-like btn-like--down">
            {likeDown}
          </button>
          <span id="likes-down" className="likes-count likes-count--down">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
