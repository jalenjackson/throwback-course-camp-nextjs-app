export const call = async (props, e, minus10, player) => {
  if (!e) {
    player.seekTo(minus10)
  }
  await props.container.updateState('played', parseFloat( e ? e.target.value : minus10));
  $('.video-seek-inner-track').css({ width: (props.container.state.played * 100) + '%' });
};
