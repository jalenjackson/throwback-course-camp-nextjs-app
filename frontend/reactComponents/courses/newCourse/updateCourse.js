export const updateCourse = (props, type, value) => {
  props.container.updateState(type, value);
  props.container.updateCourse(props.course, type, value);
};
