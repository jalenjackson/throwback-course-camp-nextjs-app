import React from 'react';
import ReviewSections from '../../globalComponents/reviewSections/index'

export default class Track extends React.Component {
  render() {
    return (
      <div>
        <ReviewSections { ...this.props } courseNotInState={ true } />
      </div>
    )
  }
}