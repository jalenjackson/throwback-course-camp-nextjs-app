import React from 'react';
import _ from 'lodash';

export default class SectionList extends React.Component {
  render() {
    return (
      <div className="scenes">
        { this.renderSections() }
      </div>
    )
  }

  renderSections() {
    return _.times(4, () => (
      <div className="video-wrap">
        <div className="video-scene">
          <div className='delete-section'>x</div>
          <div className='video-overlay'>
            <h1>{_.truncate('First section', {'length': 10})}</h1>
          </div>
        </div>
      </div>
    ))
  }
}
