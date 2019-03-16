import React from 'react';
import PageLoader from "../pageLoader";

export default class Error extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
    }
  }
  
  render() {
    return (
      <div>
        { this.state.loaded
          ? <div style={ styles.outerDiv }>
              <div style={ styles.outerContainer }>
                <h1 style={ styles.h1Color }>Ooops! Something went wrong...</h1>
                <p>This is our fault, and we are working diligently to solve this issue</p>
              </div>
              <img style={ styles.backgroundImage } src='/static/backgroundImages/error.svg' />
            </div>
          : <PageLoader />
        }
      </div>
    )
  }
}

const styles = {
  outerDiv: {
    position: 'relative', height: '100vh', background: '#9881B1'
  },
  outerContainer: {
    width: '80%', height: '100%',  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
    zIndex: 999999, position: 'absolute', top: -100, left: 0, right: 0, margin: 'auto', color: 'white', pointerEvents: 'none'
  },
  h1Color: {
    color: 'white'
  },
  backgroundImage: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }
};