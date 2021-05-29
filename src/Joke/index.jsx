import React, { useState } from 'react';
import './style.css';

const Joke = (props) => {
  const [countUp, setCountUp] = useState(props.likes);
  const [countDown, setCountDown] = useState(props.dislikes);

  // const handleClickUp = () => {
  //   setCountUp(countUp + 1);
  // };
  // const handleClickDown = () => {
  //   setCountDown(countDown + 1);
  // };

  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={props.userAvatar} />
            <p className="user-name">{props.userName}</p>
          </div>
          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            onClick={() => setCountUp(countUp + 1)}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {countUp}
          </span>

          <button
            onClick={() => setCountDown(countDown + 1)}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {countDown}
          </span>
        </div>
      </div>
    </>
  );
};

export default Joke;
