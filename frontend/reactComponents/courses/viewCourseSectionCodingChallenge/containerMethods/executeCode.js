import {recordExercisePlayed} from "../../../../../globalHelpers/recordExercisePlayed";

export const call = (context, props) => {
  context.setState({
    isEvaluating: true,
    codeOutput: '',
    isError: false,
    outputModalVisibility: true
  });

  let worker = null;
  if(typeof(Worker) === 'undefined') {
    alert('sorry your browser doesnt support coding projects. Please update your browser');
    return;
  }

  let workerCode = () => {
    onmessage = function(e) {
      try {
        eval(e.data);
      } catch (e) {
        postMessage({ error: true, message: e.message });
      }
      postMessage({ eval: eval(e.data) });
    }
  };

  window.startWorker = () => {
    setTimeout(() => {
      context.setState({ isEvaluating: true });
    }, 350);
    if (worker) return;
    let code = "(" + workerCode.toString() + ")();";
    let blob = new Blob([code]);
    let blobURL = window.URL.createObjectURL(blob);
    worker = new Worker(blobURL);
    worker.postMessage(context.state.javascriptSandboxValue);
    worker.onmessage = event => {
      if(Object.keys(event.data).length === 2) {
        setTimeout(() => {
          return context.setState({
            codeOutput: event.data.message,
            codeOutputMessage: 'It looks like there was an issue with your code!',
            isError: true,
            isCorrect: false,
            isEvaluating: false,
            noOutput: false
          });
        }, 390)
      } else {
        setTimeout(() => {
          if (event.data['eval'] !== undefined) {
            if (String(event.data['eval']) === String(context.state.returnValue)) {
              context.setState({
                codeOutput: event.data.eval,
                codeOutputMessage: 'Great job! You are on a role!',
                isError: false,
                isCorrect: true,
                isEvaluating: false,
                noOutput: false
              });
              return recordExercisePlayed(props.course._id, 'codingChallenge', 'Completed', props.sectionIndex, props.videoIndex, props.auth);
            } else {
              return context.setState({
                codeOutput: event.data.eval,
                codeOutputMessage: `Ooops! Sorry that is not correct. Expected output ${String(context.state.returnValue)}`,
                isError: false,
                isCorrect: false,
                isEvaluating: false,
                noOutput: false
              });
            }
          } else {
            return context.setState({
              codeOutput: event.data.eval ? event.data.eval : 'Your code did not return any output. If you tried to console.log that will appear in the developer tools.',
              isError: false,
              isCorrect: false,
              isEvaluating: false,
              codeOutputMessage: "It looks like your function didn't return anything",
              noOutput: true
            });
          }
        }, 390);
      }
    };
  };

  window.stopWorker = () => {
    if (!worker) return;
    worker.terminate();
    worker = null;
  };

  window.startWorker();
};
