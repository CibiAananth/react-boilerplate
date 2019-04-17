import { darkCardBody, drawerWidth } from 'assets/jss/material-ui/material-ui';

const styledBy = (property, mapping) => (props) => {
  if (property === 'height') {
    return typeof props.height === typeof '1'
      ? props.height
      : typeof props.height === typeof 1
        ? `${props.height}px`
        : props.height;
  }
  if (property === 'maxheight') {
    return typeof props.maxheight === typeof '1'
      ? props.maxheight
      : typeof props.maxheight === typeof 1
        ? `${props.maxheight}px`
        : props.maxheight;
  }
  return mapping[props[property]];
};

const cardBodyStyle = theme => ({
  cardBody: {
    padding: '0.9375rem 20px',
    flex: '1 1 auto',
    WebkitBoxFlex: '1',
    maxWidth: `calc(${window.innerWidth}px - ${drawerWidth}px - 50px)`,
    position: 'relative',
    '&$darkCardBody': {
      margin: '0 15px',
      padding: '0',
      position: 'relative',
      color: '#FFFFFF',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: window.innerWidth,
    },
  },
  cardBodyPlain: {
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  cardBodyMap: {
    padding: '0 !important',
  },
  cardBodyChart: {
    padding: 0,
    height: styledBy('height', {}),
    maxHeight: styledBy('maxheight', {}),
  },
  darkCardBody: {
    color: '#FFFFFF',
    ...darkCardBody,
  },
  table: {
    overflow: 'scroll',
  },
});

export default cardBodyStyle;
