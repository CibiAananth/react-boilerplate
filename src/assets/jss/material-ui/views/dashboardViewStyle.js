import { transition } from '../material-ui';

const dashboardStyle = {
  actionButtons: {
    marginLeft: 'auto',
  },
  hoverGrid: {
    '&:hover': {
      '& $card': {
        transform: 'translateY(-20%)',
        ...transition,
      },
    },
  },
  actionButton: {
    transform: 'translateY(-200%)',
    position: 'absolute',
    zIndex: '-1',
  },
  card: {
    // zIndex: '1',
    ...transition,
  },
  title: {
    fontSize: 17,
    fontVariant: 'all-petite-caps',
    fontWeight: '400',
    color: 'rgba(255,255,255,.8)',
  },
};

export default dashboardStyle;
