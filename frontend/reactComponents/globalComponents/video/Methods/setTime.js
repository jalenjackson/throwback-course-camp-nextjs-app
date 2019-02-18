import { toHHMMSS } from '../helpers';

export const call = (props, player) => {
  props.container.updateState('videoDuration', toHHMMSS(player.getDuration()))
};
