import React from 'react';
import PropTypes from 'prop-types';
// router
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * @class
 * @hideconstructor
 * @description Stateless Router component to switch component based on the Route
 */
const SwitchRoutes = ({ routes }) => {
  console.log('routes', routes);
  return (
    <Switch>
      {routes.map((prop, key) => {
        const {
          redirect, subRoutes, path, to, component: Component,
        } = prop;
        if (redirect) return <Redirect from={path} to={to} key={key} />;
        if (subRoutes !== undefined && subRoutes.length !== 0) return switchSubRoutes(subRoutes, key);
        return (
          <Route
            path={path}
            render={rp => <Component {...prop} {...rp} />}
            key={key}
          />
        );
      })}
      <Route render={() => <div>not found</div>} />
    </Switch>
  );
};

const switchSubRoutes = routes => routes.map((prop, itemKey) => {
  const { subRoutes, path, component: Component } = prop;
  if (subRoutes !== undefined && subRoutes.length !== 0) return switchSubRoutes(subRoutes, itemKey);
  return (
    <Route
      path={path}
      render={rp => <Component {...prop} {...rp} />}
      key={itemKey}
    />
  );
});

// component properties
SwitchRoutes.propTypes = {
  /**
   * @type {object}
   * @description Dashboard Routes
   */
  routes: PropTypes.array.isRequired,
};

export default SwitchRoutes;
