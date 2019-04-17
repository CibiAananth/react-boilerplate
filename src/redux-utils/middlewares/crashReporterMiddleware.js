import reportError from 'utils/crashReporter';

const crashReporter = () => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    reportError(err);
    throw err;
  }
};

export default crashReporter;
