const loginStyles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    background: '#fff',
  },
  header: {
    height: '70px',
    width: '100%',
  },
  productLogo: {
    width: 'fit-content',
    marginLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      left: '25%',
      transform: 'translateX(-50%)',
      margin: 0,
    },
  },
  logoText: {
    position: 'relative',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#6b5cff',
  },
  analyticsVector: {
    width: '100%',
    padding: '12%',
    paddingTop: '9%',
    [theme.breakpoints.down('sm')]: {
      padding: '3%',
    },
  },
  welcomeText: {
    position: 'relative',
    top: '25%',
    transform: 'translateY(-50%)',
    fontFamily: 'Muli, Helvetica Neue',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      width: 'fit-content',
      padding: '0 10px',
      textAlign: 'center',
      top: '10%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
  },
  subHeader: {
    margin: '20px 0 0',
    fontWeight: 400,
    color: '#959aa5',
    fontFamily: 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  formBox: {
    background: '#fcfcfffa',
    top: '43%',
    position: 'relative',
    transform: 'translateY(-50%)',
    height: 'fit-content',
    width: 'calc(100% - 30%)',
    padding: '10px 18px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      top: '41%',
      left: '50%',
      width: '100%',
      transform: 'translate(-50%,-50%)',
    },
  },
});

export default loginStyles;
