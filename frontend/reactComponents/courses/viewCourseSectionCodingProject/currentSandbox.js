import React from 'react';
import Files from './files';
import HTMLEditor from './editors/HTMLEditor';
import CSSEditor from './editors/CSSEditor';
import JavaScriptEditor from './editors/JavaScriptEditor';
import TxtEditor from './editors/TxtEditor';
import Output from './output';
import EndGame from "./endGame";

const CurrentSandbox = props => (
  <div className='current-sandbox'>
    <Files { ...props } />
    { props.container.state.currentSandbox === 'Task' ? <TxtEditor summary={ props.codingProject.summary } /> : null }
    { props.container.state.currentSandbox === 'HTML' ? <HTMLEditor { ...props } /> : null }
    { props.container.state.currentSandbox === 'CSS' ? <CSSEditor { ...props } /> : null }
    { props.container.state.currentSandbox === 'JavaScript' ? <JavaScriptEditor { ...props } /> : null }
    { props.container.state.currentSandbox === 'Finished'
      ? <EndGame
          auth={ props.auth }
          sectionIndex={ props.sectionIndex }
          videoIndex={ props.videoIndex }
          newQuestionContainer={ props.newQuestionContainer }
          thisContainer={ props.container }
          course={ props.course }
          currentVideo={ props.currentVideo } />
      : null }
    <Output { ...props } />
  </div>
);

export default CurrentSandbox;
