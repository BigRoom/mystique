import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter }                      from 'redux-router';
import createHistory                             from 'history/lib/createBrowserHistory';
import createLogger                              from 'redux-logger';
import reducers                                  from 'reducers';
import DevTools                                  from 'containers/DevTools';
import thunk                                     from 'redux-thunk';
import routes                                    from 'routes'

const logger = createLogger();

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

const finalCreateStore = compose(
  applyMiddleware(thunk, logger, crashReporter),
  reduxReactRouter({ routes, createHistory }),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducers);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer((require('../reducers')));
  });
}

export default store;
