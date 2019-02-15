import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

/**
 * @class
 * @hideconstructor
 * @description Notification bar stateless component
 */
const Notification = ({ isOpen, handleClose, anchorOrigin }) => (
  <Snackbar
    open={isOpen}
    anchorOrigin={anchorOrigin}
    autoHideDuration={2000}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    onClose={handleClose}
    message={<span id="message-id">Invalid username or password</span>}
    action={[
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

// component properties
Notification.propTypes = {
  /**
   * @type {object}
   * @description - Vertical and horizontal position of the snackbar
   */
  anchorOrigin: PropTypes.object,
  /**
   * @type {boolean}
   * @description - To display or hide snackbar
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * @type {boolean}
   * @description - Callback function to handle Snackbar close
   */
  handleClose: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
};

export default Notification;
