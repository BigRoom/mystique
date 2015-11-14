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

export default function configureStore(initialState) {
  const store = finalCreateStore(reducers, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(combineReducers(require('../reducers')));
    });
  }

  return store;
}
