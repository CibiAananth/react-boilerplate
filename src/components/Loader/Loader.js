import React from 'react';
// library to set component properties
import PropTypes from 'prop-types';
// library to concatenate classes
import classNames from 'classnames';
// @material-ui/core
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/core/styles/withStyles';
// styles
import loaderStyles from './Loader.styles';

/**
 * @class
 * @hideconstructor
 * @description Core Loading/Progress component
 */
const Loader = ({
  className,
  classes,
  color,
  centered,
  circular,
  inline,
  plain,
}) => {
  const classList = classNames({
    [classes.root]: inline && !plain,
    [className]: className,
    [classes.plain]: plain,
  });
  const rootClass = classNames({
    [classes.wrapper]: inline && !plain,
    [classes.plainWrapper]: plain,
    [classes.centered]: centered,
  });
  return (
    <div className={rootClass}>
      {circular ? (
        <CircularProgress color={color} className={classList} />
      ) : (
        <LinearProgress color={color} className={classList} />
      )}
    </div>
  );
};

// component properties
Loader.propTypes = {
  /**
   * @type {object}
   * @description - Classnames of the styles generated with jss
   */
  classes: PropTypes.object.isRequired,
  /**
   * @type {boolean}
   * @description - Loaders can appear inline with content.
   */
  inline: PropTypes.bool,
  /**
   * @type {string}
   * @description - Color of the loader.
   */
  color: PropTypes.string,
  /**
   * @type {string}
   * @description - Classname to apply for the root element
   */
  className: PropTypes.string,
  /**
   * @type {boolean}
   * @description - Loader can be 'circular' or 'linear'
   */
  circular: PropTypes.bool,
  /**
   * @type {boolean}
   * @description - Loader can be 'centered' horizontally
   */
  centered: PropTypes.bool,
  /**
   * @type {boolean}
   * @description - Loader can be 'circular' or 'linear'
   */
  plain: PropTypes.bool,
};

Loader.defaultProps = {
  inline: false,
  color: 'primary',
  className: '',
  circular: false,
  plain: false,
  centered: false,
};

export default withStyles(loaderStyles)(Loader);
