export const navigatePane = async (props, number, state) => {
  props.container.updateState('currentPaneNumber', number);
  props.container.updateState('currentPane', state);
};
