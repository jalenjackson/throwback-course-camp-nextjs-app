import React from 'react';
import { BarLoader } from 'react-spinners';

export default class Loader extends React.Component {
  render() {
    return (
      <div style={ this.containerStyles }>
        <div>
          <BarLoader color={'#43A5FF'} />
        </div>
      </div>
    )
  }
  
  containerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  };
}