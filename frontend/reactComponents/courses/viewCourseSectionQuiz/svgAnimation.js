import React from 'react';

export default class SVGAnimation extends React.Component {
  render() {
    return (
      <div>
        <div id="svg-container">
          <svg className="line-anim" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px" viewBox="0 0 295 327.4">
            <defs />
            <path id="line0" fill="none" stroke={ `${ this.props.course.color }1A` } strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M47.7,44.6v240"/>
            <path id="splash-lines-bottom" fill="none" stroke='rgba(86, 94, 101, 0.10)' strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M19.7,317.9l12.6-21.8 M47.5,325.4v-25.1 M75.3,317.9l-12.6-21.8 " />
            <path id="splash-lines-top" fill="none" stroke='rgba(86, 94, 101, 0.10)' strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M75.3,9.5L62.7,31.3 M47.5,2v25.1 M19.7,9.5l12.6,21.8 " />
          </svg>
        </div>
      </div>
    )
  }
}
