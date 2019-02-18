export const call = (props, e, speed) => {
  props.container.updateState('playbackRate', speed)
};
