// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
import colors from 'styles/__variables';

const drawerWidth = 230;

const transition = {
  transitionProperty: 'all',
  transitionDuration: '.2s,.2s,.35s',
  transitionTimingFunction: 'linear,linear,ease',
};

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const boxShadow = {
  boxShadow: '0 0 45px 0 rgba(0,0,0,.6)',
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff',
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const {
  buttonDark,
  default: defaultColor,
  cardDark: dark,
  light25,
  light24,
  dark15,
  light26,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  baseFontColor,
  buttonDarkHoverColor,
  homeColor,
} = colors.dark;

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};

const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

const darkBoxShadow = {
  ...boxShadow,
};

const darkCardHeader = {
  background: dark,
  ...darkBoxShadow,
};

const warningCardHeader = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};

const darkCardBody = {
  background: dark,
  ...darkBoxShadow,
};

const warningCardBody = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  ...warningBoxShadow,
};
const successCardBody = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  ...successBoxShadow,
};
const dangerCardBody = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  ...dangerBoxShadow,
};
const infoCardBody = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  ...infoBoxShadow,
};
const primaryCardBody = {
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  ...primaryBoxShadow,
};
const roseCardBody = {
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  ...roseBoxShadow,
};

const darkCard = {
  background: '#27293d',
};

const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  ...defaultFont,
};

const cardHeader = {
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.12), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const title = {
  color: '#3C4858',
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    color: '#777',
    fontWeight: '400',
    lineHeight: '1',
  },
};

const cardTitle = {
  ...title,
  marginTop: '0',
  marginBottom: '3px',
  minHeight: 'auto',
  '& a': {
    ...title,
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto',
  },
};

const cardSubtitle = {
  marginTop: '-.375rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

export {
  // variables
  drawerWidth,
  transition,
  container,
  card,
  defaultFont,
  buttonDark,
  buttonDarkHoverColor,
  dark,
  defaultColor,
  dark15,
  light25,
  light24,
  light26,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  homeColor,
  baseFontColor,
  darkBoxShadow,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  darkCardHeader,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  darkCardBody,
  warningCardBody,
  successCardBody,
  dangerCardBody,
  infoCardBody,
  primaryCardBody,
  roseCardBody,
  darkCard,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
};
