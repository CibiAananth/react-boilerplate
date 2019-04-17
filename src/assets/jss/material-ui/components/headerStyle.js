import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
} from '../material-ui';

const headerStyle = theme => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    position: 'absolute',
    width: 'calc(100% - 20rem)',
    paddingTop: '10px',
    zIndex: '1',
    // zIndex: '1029',
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block',
    left: '20rem',
  },
  navTitle: {
    paddingLeft: '10px',
    fontVariant: 'all-petite-caps',
  },
  container: {
    ...container,
    minHeight: '50px',
  },
  flex: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    margin: theme.spacing.unit,
  },
  menuButtonRight: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    margin: '0',
    '&:hover,&:focus': {
      background: 'transparent',
    },
  },
  appResponsive: {
    top: '8px',
  },
  dark: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
  primary: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor,
    color: '#FFFFFF',
    ...defaultBoxShadow,
  },
});

export default headerStyle;
