import React from 'react';

const Title = props => (
    <div>
      <div className='matching-game-title'>
        <h1>{ props.crunchChallenge.target }</h1>
      </div>
    </div>
);

export default Title;
