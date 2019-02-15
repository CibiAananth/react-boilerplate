import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import Snackbar from '@material-ui/core/Snackbar';
// core components
import Loader from 'components/Loader/Loader';

const message = (
  <span id="no-internet-snackbar">
    {'No active internet connection, retrying'}
    <Loader circular color="secondary" plain inline />
  </span>
);

const NoInternetSnackBar = ({ network }) => (
  <div>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!network.isOnline}
      ContentProps={{
        'aria-describedby': 'no-internet-snackbar',
      }}
      message={message}
    />
  </div>
);

NoInternetSnackBar.propTypes = {
  network: PropTypes.object.isRequired,
};

export default NoInternetSnackBar;
