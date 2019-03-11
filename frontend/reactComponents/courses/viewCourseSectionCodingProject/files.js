import React from 'react';
import { recordExercisePlayed } from "../../../../globalHelpers/recordExercisePlayed";

const Files = props => (
  <div className="files">
    <div
        onClick={ () => props.container.updateSandboxView('Task') }
        className={`file-nav ${ props.container.state.currentSandbox === 'Task' ? 'file-nav-active' : '' }`}>
      <h1>task.txt</h1>
    </div>
    <div
      onClick={ () => props.container.updateSandboxView('HTML') }
      className={`file-nav ${ props.container.state.currentSandbox === 'HTML' ? 'file-nav-active' : '' }`}>
      <h1>index.html</h1>
    </div>
    <div
      onClick={ () => props.container.updateSandboxView('CSS') }
      className={`file-nav ${ props.container.state.currentSandbox === 'CSS' ? 'file-nav-active' : '' }`}>
      <h1>main.css</h1>
    </div>
    <div
      onClick={ () => props.container.updateSandboxView('JavaScript') }
      className={`file-nav ${ props.container.state.currentSandbox === 'JavaScript' ? 'file-nav-active' : '' }`}>
      <h1>main.js</h1>
    </div>
    <div
      onClick={ () => props.container.getOutput() }
      className={`file-nav ${ props.container.state.currentSandbox === 'Output' ? 'file-nav-active' : '' }`}>
      <h1>Output</h1>
    </div>
    <div
      onClick={ () => finishAndRecord(props) }
      className={`file-nav ${ props.container.state.currentSandbox === 'Finished' ? 'file-nav-active' : '' }`}>
      <h1>Finished</h1>
    </div>
  </div>
);

const finishAndRecord = props => {
  props.container.updateSandboxView('Finished');
  props.afterExerciseModalContainer.updateState('winModalVisible', true);
  return recordExercisePlayed(props.course._id, 'codingProject', 'Completed', props.sectionIndex, props.videoIndex, props.auth);
};

export default Files;
