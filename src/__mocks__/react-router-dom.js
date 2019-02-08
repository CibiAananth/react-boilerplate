import React from 'react';

const rrd = require('react-router-dom');

// eslint-disable-next-line react/prop-types
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

module.exports = rrd;
