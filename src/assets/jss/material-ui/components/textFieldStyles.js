import { dark15, light26, light24 } from 'assets/jss/material-ui/material-ui';

const styledBy = (property, mapping) => (props) => {
  if (property === 'inputColor') {
    return props.colorTheme === 'light' ? '#2b2a2a !important' : `${light24} !important`;
  }
  if (property === 'borderColor') {
    return props.colorTheme === 'light' ? '#abb7d8 !important' : `${dark15} !important`;
  }
  if (property === 'labelColor') {
    return props.colorTheme === 'light' ? '#959aa5 !important' : `${light26} !important`;
  }
  if (property === 'width') {
    return props.width
      ? typeof props.width === typeof '1'
        ? props.width
        : typeof props.width === typeof 1
          ? `${props.width}px`
          : props.width
      : '100%';
  }
  return mapping[props[property]];
};

const textFieldStyles = {
  root: {
    width: styledBy('width', {}),
    '& label': {
      color: styledBy('labelColor', {}),
      transform: 'translate(14px, 12px) scale(0.75)',
    },
    '& fieldset': {
      borderColor: styledBy('borderColor', {}),
    },
    '& input': {
      color: styledBy('inputColor', {}),
      padding: '10px 15px',
      fontSize: 14,
    },
  },
};

export default textFieldStyles;
