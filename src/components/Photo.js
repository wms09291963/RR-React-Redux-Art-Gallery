import React from 'react';
import { useSelector } from 'react-redux';

function Photo() {
  const mode = useSelector((state) => state.mode);

  return (
    <div className={`Photo ${mode}`}>
      <img src='https://placekitten.com/200/300' alt="author" />
    </div>
  );
}

export default Photo;

