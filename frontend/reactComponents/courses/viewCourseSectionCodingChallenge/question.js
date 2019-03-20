import React from 'react';
import atob from 'atob';

export default class Question extends React.Component {
  state = {
    modalVisible: false,
    description: atob(this.props.codingChallenge.description)
  };
  
  render() {
    return (
      <div className='coding-question-container'>
        <h1>{ this.props.codingChallenge.title }</h1>
        <div className="coding-challenge-description" dangerouslySetInnerHTML={{ __html: this.state.description }} />
      </div>
    )
  }
}