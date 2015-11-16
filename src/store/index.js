import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistState }                                           from 'redux-devtools';
import reducers                                                   from 'reducers/index';
import createLogger                                               from 'redux-logger';
import DevTools                                                   from 'containers/DevTools';
import thunk                                                      from 'redux-thunk';

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
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(reducers);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    store.replaceReducer(combineReducers(require('../reducers')));
  });
}

export default store;
