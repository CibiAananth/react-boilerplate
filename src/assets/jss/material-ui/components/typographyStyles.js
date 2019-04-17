import {
  buttonDark,
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  homeColor,
  light25,
  light26,
} from '../material-ui';

const sizeSwitch = (size) => {
  switch (size) {
    case 'xs': {
      return '12px';
    }
    case 'sm': {
      return '16px';
    }
    case 'md': {
      return '20px';
    }
    case 'l': {
      return '26px';
    }
    case 'xl': {
      return '32px';
    }
    case 'xxl': {
      return '40px';
    }
    default:
      return `${size}px`;
  }
};

const colorSwitch = (color) => {
  switch (color) {
    case 'dark75':
      return buttonDark;
    case 'gray':
      return grayColor;
    case 'primary':
      return primaryColor;
    case 'info':
      return infoColor;
    case 'danger':
      return dangerColor;
    case 'success':
      return successColor;
    case 'warning':
      return warningColor;
    case 'rose':
      return roseColor;
    case 'home':
      return homeColor;
    case 'light25':
      return light25;
    case 'light26':
      return light26;
    default:
      return color;
  }
};

const styledBy = (property, mapping) => (props) => {
  if (property === 'color') {
    return colorSwitch(props.color);
  }
  if (property === 'size') {
    return sizeSwitch(props.size);
  }
  if (property === 'weight') {
    return props.weight || 500;
  }
  if (property === 'align') {
    return props.align;
  }
  return mapping[props[property]];
};

const typographyStyles = {
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)',
  },
  default: {
    fontWeight: styledBy('weight', {}),
    fontFamily: 'Helvetica Neue, sans-serif',
    whiteSpace: 'nowrap',
    color: styledBy('color', {}),
    fontSize: styledBy('size', {}),
    textAlign: styledBy('align', {}),
  },
  cardTitle: {
    display: 'inline-block',
    marginRight: '30px',
    color: light25,
  },
};

export default typographyStyles;
