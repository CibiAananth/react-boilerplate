import {
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  buttonDark,
  grayColor,
  transition,
  homeColor,
  light25,
  light26,
} from '../material-ui';

const colorSwitch = (color) => {
  switch (color) {
    case 'dark75':
      return buttonDark;
    case 'gray':
      return grayColor;
    case 'primary':
      return '#42b883';
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
    case 'light':
      return 'rgba(255, 255, 255, 0.7)';
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
  return mapping[props[property]];
};

const iconsStyle = {
  iconWrapper: {
    fontSize: '32px',
    display: 'inline-block',
    margin: '0 4px',
    cursor: 'pointer',
    '& svg': {
      fill: styledBy('color', {}),
    },
    ...transition,
    '&:hover': {
      transform: 'scale(1.3)',
    },
  },
  iconInfo: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    backgroundSize: '210% 210%',
    '&:hover': {
      transform: 'scale(1)',
    },
    '& svg': {
      fill: '#fff !important',
      padding: '14px 6px 13px 0',
      height: 50,
      width: 50,
    },
    '&$orange': {
      background: '#ff8d72',
      backgroundImage:
        'linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)',
    },
  },
  orange: {},
};

export default iconsStyle;
