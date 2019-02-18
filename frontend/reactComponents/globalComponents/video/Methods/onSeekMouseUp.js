export const call = async (props, e, player) => {
  e.target.value === String(100) ? await player.seekTo(1) : await player.seekTo(props.container.state.played);
  props.container.updateState('seeking', false);
};
