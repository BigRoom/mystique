import { createStore, applyMiddleware, compose }                  from 'redux';
import { persistState }                                           from 'redux-devtools';
import reducers                                                   from 'reducers/index';
import createLogger                                               from 'redux-logger';
import DevTools                                                   from 'containers/DevTools';
import thunk                                                      from 'redux-thunk';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
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
