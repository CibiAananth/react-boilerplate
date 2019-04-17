import {
  buttonDark,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  homeColor,
  buttonDarkHoverColor,
} from '../material-ui';

const grayColor = 'hsla(0,0%,100%,.5)';

const buttonStyle = {
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    backgroundColor: grayColor,
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '3px',
    position: 'relative',
    padding: '12px 30px',
    margin: '.3125rem 1px',
    willChange: 'box-shadow, transform',
    transition:
      'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    '&:hover,&:focus': {
      color: '#FFFFFF',
      backgroundColor: grayColor,
    },
    '& .fab,& .fas,& .far,& .fal, &.material-icons': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      marginTop: '-1em',
      marginBottom: '-1em',
      fontSize: '1.1rem',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '& svg': {
      position: 'relative',
      display: 'inline-block',
      top: '0',
      width: '18px',
      height: '18px',
      marginRight: '4px',
      verticalAlign: 'middle',
    },
    '&$justIcon': {
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        marginTop: '0px',
        position: 'absolute',
        width: '100%',
        transform: 'none',
        left: '0px',
        top: '0px',
        height: '100%',
        lineHeight: '41px',
        fontSize: '20px',
      },
    },
  },
  styled: {
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: '0',
  },
  normal: {
    textTransform: 'none',
    fontWeight: 600,
    fontFamily: 'Muli, Helvetica Neue',
  },
  white: {
    '&,&:focus,&:hover': {
      backgroundColor: '#FFFFFF',
      color: grayColor,
    },
  },
  dark: {
    backgroundColor: buttonDark,
    '&:hover': {
      backgroundColor: buttonDarkHoverColor,
    },
    '&:focus': {
      backgroundColor: buttonDark,
    },
  },
  home: {
    backgroundColor: homeColor,
    boxShadow:
      '0 14px 26px -12px #6b5cff7a, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px #6b5cff7a',
    '&:hover,&:focus': {
      backgroundColor: homeColor,
      boxShadow:
        '0 2px 2px 0 #6b5cff7a, 0 3px 1px -2px #6b5cff7a, 0 1px 5px 0 #6b5cff7a',
    },
  },
  rose: {
    backgroundColor: roseColor,
    boxShadow:
      '0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)',
    '&:hover,&:focus': {
      backgroundColor: roseColor,
      boxShadow:
        '0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)',
    },
  },
  gray: {
    backgroundColor: grayColor,
    '&:hover,&:focus': {
      backgroundColor: grayColor,
    },
  },
  primary: {
    background: '#e14eca',
    backgroundImage: 'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)',
    backgroundSize: '210% 210%',
    backgroundPosition: '100% 0',
    backgroundColor: '#e14eca',
    boxShadow:
      '0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: primaryColor,
      boxShadow:
        '0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)',
    },
  },
  info: {
    backgroundColor: infoColor,
    boxShadow:
      '0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: infoColor,
      boxShadow:
        '0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)',
    },
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      '0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: successColor,
      boxShadow:
        '0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)',
    },
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      '0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: warningColor,
      boxShadow:
        '0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)',
    },
  },
  danger: {
    backgroundColor: dangerColor,
    boxShadow:
      '0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)',
    '&:hover,&:focus': {
      backgroundColor: dangerColor,
      boxShadow:
        '0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)',
    },
  },
  outline: {
    border: '1px solid',
    background: 'transparent',
    '&$sm': {
      padding: '3px 8px',
      fontSize: '0.75em',
      fontWeight: '500',
      lineHeight: '1.5',
      borderRadius: '2px',
      margin: 0,
    },
    '&$active': {
      '&$rose': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: roseColor,
        },
      },
      '&$home': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: homeColor,
        },
      },
      '&$gray': {
        '&,&:focus,&:hover,&:visited': {
          borderColor: grayColor,
          boxShadow: 'none',
          color: grayColor,
        },
      },
      '&$primary': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          background:
            'linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)!important',
          borderColor: '#e14eca',
          color: '#fff',
          fontWeight: '500',
        },
      },
      '&$info': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: infoColor,
        },
      },
      '&$success': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: successColor,
        },
      },
      '&$warning': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: warningColor,
        },
      },
      '&$danger': {
        '&,&:focus,&:hover,&:visited': {
          boxShadow: 'none',
          borderColor: dangerColor,
        },
      },
    },
    '&,&:focus,&:hover': {
      color: '#FFFFFF',
      background: 'transparent',
    },
    '&$home': {
      '&,&:focus,&:hover,&:visited': {
        color: homeColor,
      },
    },
    '&$rose': {
      '&,&:focus,&:hover,&:visited': {
        color: roseColor,
      },
    },
    '&$gray': {
      '&,&:focus,&:hover,&:visited': {
        color: grayColor,
      },
    },
    '&$primary': {
      color: primaryColor,
      '&,&:focus,&:hover,&:visited': {
        color: primaryColor,
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: infoColor,
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: successColor,
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: warningColor,
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: dangerColor,
      },
    },
  },
  simple: {
    '&,&:focus,&:hover': {
      color: '#FFFFFF',
      background: 'transparent',
      boxShadow: 'none',
    },
    '&$rose': {
      '&,&:focus,&:hover,&:visited': {
        color: roseColor,
      },
    },
    '&$home': {
      '&,&:focus,&:hover,&:visited': {
        color: homeColor,
      },
    },
    '&$gray': {
      '&,&:focus,&:hover,&:visited': {
        color: grayColor,
      },
    },
    '&$primary': {
      '&,&:focus,&:hover,&:visited': {
        color: primaryColor,
      },
    },
    '&$info': {
      '&,&:focus,&:hover,&:visited': {
        color: infoColor,
      },
    },
    '&$success': {
      '&,&:focus,&:hover,&:visited': {
        color: successColor,
      },
    },
    '&$warning': {
      '&,&:focus,&:hover,&:visited': {
        color: warningColor,
      },
    },
    '&$danger': {
      '&,&:focus,&:hover,&:visited': {
        color: dangerColor,
      },
    },
  },
  transparent: {
    '&,&:focus,&:hover': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  disabled: {
    opacity: '0.65',
    pointerEvents: 'none',
  },
  lg: {
    padding: '1.125rem 2.25rem',
    fontSize: '0.875rem',
    lineHeight: '1.333333',
    borderRadius: '0.2rem',
  },
  sm: {
    padding: '0.40625rem 1.25rem',
    fontSize: '0.6875rem',
    lineHeight: '1.5',
    borderRadius: '0.2rem',
  },
  fit: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  rect: {
    borderRadius: '0',
  },
  round: {
    borderRadius: '30px',
  },
  block: {
    width: '100% !important',
  },
  link: {
    '&,&:hover,&:focus': {
      backgroundColor: 'transparent',
      color: '#999999',
      boxShadow: 'none',
    },
  },
  active: {
    color: '#fff',
    borderRadius: '0 !important',
  },
  justIcon: {
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '20px',
    height: '41px',
    minWidth: '41px',
    width: '41px',
    '& .fab,& .fas,& .far,& .fal,& svg,& .material-icons': {
      marginRight: '0px',
    },
    '&$lg': {
      height: '57px',
      minWidth: '57px',
      width: '57px',
      lineHeight: '56px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '32px',
        lineHeight: '56px',
      },
      '& svg': {
        width: '32px',
        height: '32px',
      },
    },
    '&$sm': {
      height: '30px',
      minWidth: '30px',
      width: '30px',
      '& .fab,& .fas,& .far,& .fal,& .material-icons': {
        fontSize: '17px',
        lineHeight: '29px',
      },
      '& svg': {
        width: '17px',
        height: '17px',
      },
    },
  },
};

export default buttonStyle;
