import { buttonDark, defaultColor } from '../material-ui';

const styledBy = (property, mapping) => (props) => {
  if (property === 'width') {
    return props.width;
  }
  return mapping[props[property]];
};

const tableStyles = {
  root: {
    width: styledBy('width', {}),
    paddingRight: 0,
    overflow: 'auto',
    height: 'inherit',
    marginLeft: 20,
    boxShadow: 'none',
    background: 'transparent',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: buttonDark,
    },
    '&:nth-of-type(even)': {
      backgroundColor: defaultColor,
    },
  },
  active: {
    border: '1px solid #466ecc',
  },
};

export default tableStyles;
