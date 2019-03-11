import React from 'react';

const Title = props => (
    <div>
      <div className='matching-game-title'>
        <span>Enter as many items that match the term below...</span>
        <h1 style={{ fontSize: 22 }}>{ props.crunchChallenge.target }</h1>
      </div>
    </div>
);

export default Title;
