import {
  drawerWidth,
  transition,
  darkBoxShadow,
  defaultFont,
  primaryColor,
  successColor,
  primaryBoxShadow,
  warningBoxShadow,
  infoColor,
  roseColor,
  warningColor,
  dangerColor,
} from '../material-ui';

const drawerTransition = { ...transition, transitionProperty: 'width' };

const sidebarStyle = theme => ({
  root: {
    '&::before': {
      borderBottomColor: '#ff8d72',
      content: "''",
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '5px solid #e14eca',
      top: '5.18rem',
      left: 40,
      transform: 'translate(-50%)',
      position: 'fixed',
    },
  },
  drawerPaper: {
    position: 'fixed',
    top: '5.5rem',
    bottom: '0',
    left: 10,
    zIndex: '20',
    width: drawerWidth,
    height: 'calc(100vh - 110px)',
    border: 'none',
    borderRadius: 5,
    // background: 'linear-gradient(0deg,#389466,#42b883)',
    background: 'linear-gradient(0deg,#ff6491,#ff8d72)',
    '&:hover': {
      width: drawerWidth,
      '&$drawerClose': {
        '& $collapseItem': {
          paddingLeft: '13px',
        },
        '& $fullText': {
          opacity: '1',
        },
        '& $acronym': {
          opacity: '0',
        },
      },
    },
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      ...darkBoxShadow,
      position: 'fixed',
      display: 'block',
      top: '0',
      right: '0',
      left: 'auto',
      zIndex: '1032',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...drawerTransition,
    },
  },
  navTitle: {
    // position: 'fixed',
    marginLeft: '5.3rem',
    marginTop: 13,
    fontVariant: 'all-petite-caps',
  },
  title: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  menuButton: {
    margin: 17,
    position: 'fixed',
    cursor: 'pointer',
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    position: 'relative',
    padding: '15px 15px',
    zIndex: '4',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'rgba(180, 180, 180, 0.3)',
    },
  },
  logoLink: {
    ...defaultFont,
    textTransform: 'uppercase',
    padding: '5px 0',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: '400',
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: '#FFFFFF',
    },
  },
  logoText: {
    ...defaultFont,
    display: 'block',
    position: 'relative',
    fontSize: '14px',
    transform: 'translate3d(0px, 0, 0)',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 400,
    lineHeight: '30px',
    whiteSpace: 'nowrap',
  },
  logoImage: {
    width: '30px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '10px',
    marginRight: '6px',
    height: '30px',
    lineHeight: '30px',
    float: 'left',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  img: {
    left: '-12px',
    position: 'relative',
    verticalAlign: 'middle',
  },
  background: {
    position: 'absolute',
    zIndex: '1',
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: '.8',
    },
  },
  list: {
    marginTop: '20px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    position: 'unset',
  },
  item: {
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    '&:hover,&:focus,&:visited,&': {
      color: '#FFFFFF',
    },
  },
  iconRight: {
    opacity: '1',
    display: 'block',
    transform: 'translate3d(165px, -34px, 0)',
  },
  itemLink: {
    width: 'auto',
    transition: 'all 300ms linear',
    margin: '10px 5px 0',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    maxHeight: '40px',
    color: '#ffffffbd',
    ...defaultFont,
    '&:hover': {
      background: '#ffffff1c',
      borderRadius: '50px',
    },
  },
  itemIcon: {
    width: '30px',
    height: '30px',
    fontSize: '24px',
    lineHeight: '30px',
    float: 'left',
    marginRight: '13px',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'rgba(255, 255, 255, 0.51)',
    '& svg': {
      fontSize: '22px',
      height: '20px',
      fill: 'rgba(255, 255, 255, 0.51) !important',
    },
  },
  whiteFont: {
    color: '#FFFFFF',
  },
  drawerOpen: {
    width: drawerWidth,
    ...drawerTransition,
  },
  drawerClose: {
    ...drawerTransition,
    overflowX: 'hidden',
    width: theme.spacing.unit * 4 + 1,
    '& $collapseItem': {
      ...transition,
      paddingLeft: 0,
    },
    '& $fullText': {
      opacity: '0',
    },
    '& $acronym': {
      opacity: '1',
      transform: 'translate3d(-16px,-30px,0)',
    },
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7.5 + 1,
    },
  },
  footerPalette: {
    position: 'absolute',
    bottom: '40px',
    left: '30px',
    [theme.breakpoints.down('md')]: {
      bottom: '70px',
    },
  },
  itemText: {
    ...defaultFont,
    color: 'inherit',
    margin: '0',
    height: 'auto',
    opacity: '1',
    display: 'block',
    position: 'relative',
    top: '-5px',
    fontSize: '14px',
    transform: 'translate3d(0px, 0, 0)',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: '400',
    lineHeight: '30px',
    whiteSpace: 'nowrap',
    fontVariant: 'all-small-caps',
  },
  fullText: {
    opacity: '1',
    paddingLeft: '25px !important',
  },
  acronym: {
    opacity: '0',
    transform: 'translate3d(-12px,-30px,0)',
  },
  indicator: {
    color: '#fff',
    '&:before': {
      top: 0,
      left: '2px',
      width: '100%',
      border: 0,
      height: '42px',
      content: '""',
      display: 'block',
      position: 'absolute',
      background: '#ffffff3b',
      borderRadius: '50px',
    },
    '&:hover': {
      background: 'transparent',
    },
    '& $itemIcon': {
      color: '#fff',
      '& svg': {
        fill: '#fff !important',
      },
    },
  },
  purple: {
    backgroundColor: primaryColor,
    ...primaryBoxShadow,
    '&:hover': {
      backgroundColor: primaryColor,
      ...primaryBoxShadow,
    },
  },
  yellow: {
    backgroundColor: warningColor,
    ...warningBoxShadow,
    '&:hover': {
      backgroundColor: warningColor,
      ...warningBoxShadow,
    },
  },
  blue: {
    backgroundColor: infoColor,
    boxShadow:
      '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
    '&:hover': {
      backgroundColor: infoColor,
      boxShadow:
        '0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)',
    },
  },
  green: {
    backgroundColor: successColor,
    boxShadow:
      '0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
    '&:hover': {
      backgroundColor: successColor,
      boxShadow:
        '0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)',
    },
  },
  orange: {
    backgroundColor: dangerColor,
    boxShadow:
      '0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
    '&:hover': {
      backgroundColor: dangerColor,
      boxShadow:
        '0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)',
    },
  },
  dark: {
    backgroundColor: '#202128',
    '&:hover': {
      backgroundColor: '#202128',
    },
  },
  darkpink: {
    backgroundColor: roseColor,
    boxShadow:
      '0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
    '&:hover': {
      backgroundColor: roseColor,
      boxShadow:
        '0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)',
    },
  },
  collapseItem: {
    ...transition,
    paddingLeft: '13px',
  },
  nestedRoute: {
    '& $iconRight': {
      transform: 'translate3d(141px, -34px, 0)',
    },
  },
  sidebarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: '4',
  },
  activePro: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      width: '100%',
      bottom: '13px',
    },
  },
});

export default sidebarStyle;
