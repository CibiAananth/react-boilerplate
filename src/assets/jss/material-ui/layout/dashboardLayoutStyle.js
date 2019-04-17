import { transition } from '../material-ui';

const dashboardStyle = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '1rem',
    position: 'relative',
    paddingBottom: '50px',
  },
  toolbar: theme.mixins.toolbar,
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.props.sideBarMini}px)`,
      padding: '1rem',
    },
    position: 'relative',
    maxHeight: '100%',
    width: '100%',
    ...transition,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
});

export default dashboardStyle;
