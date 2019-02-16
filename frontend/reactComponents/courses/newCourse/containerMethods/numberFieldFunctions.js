import { updateCourse } from '../updateCourse';

export const callNumberFieldBlur = (context, props) => {
  const { price } = context.state;
  const { onBlur, onChange } = props;
  if (price.charAt(price.length - 1) === '.' || price === '-') {
    onChange({ value: price.slice(0, -1) });
  }
  if (onBlur) {
    onBlur();
  }
};

export const callNumberFieldChange = (context, e, props) => {
  const { value } = e.target;
  const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
  if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
    context.setState({ price: value });
    if (props.isFromBuildCourse) updateCourse(props, 'price', value)
  }
};
