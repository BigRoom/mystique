// blatantly stolen from https://github.com/jlongster/redux-simple-router with minor changes
/*
 * Copyright (c) 2015 James Long
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// constants

const UPDATE_PATH = "@@router/UPDATE_PATH";
const SELECT_STATE = state => state.routing;

// Action creator

function updatePath(path, avoidRouterUpdate) {
  return {
    type: UPDATE_PATH,
    path: path,
    avoidRouterUpdate: !!avoidRouterUpdate
  }
}

// Reducer

const initialState = typeof window === 'undefined' ? {} : {
  path: locationToString(window.location),
  changeId: 1
};

function update(state = initialState, action) {
  if(action.type === UPDATE_PATH) {
    return {
      ...state,
      path: action.path,
      changeId: state.changeId + (action.avoidRouterUpdate ? 0 : 1)
    }
  }
  return state;
}

// Syncing

function locationToString(location) {
  return location.pathname + location.search + location.hash;
}

function syncReduxAndRouter(history, store, selectRouterState = SELECT_STATE) {
  let lastChangeId = 0;
  const getRouterState = () => selectRouterState(store.getState());

  if(!getRouterState()) {
    throw new Error(
      "Cannot sync router: route state does not exist. Did you " +
      "install the routing reducer?"
    );
  }

  const unsubscribeHistory = history.listen(location => {
    const routePath = locationToString(location);

    // Avoid dispatching an action if the store is already up-to-date
    if(getRouterState().path !== routePath) {
      store.dispatch(updatePath(routePath, { avoidRouterUpdate: true }));
    }
  });

  const unsubscribeStore = store.subscribe(() => {
    const routing = getRouterState();

    // Only update the router once per `updatePath` call. This is
    // indicated by the `changeId` state; when that number changes, we
    // should call `pushState`.
    if(lastChangeId !== routing.changeId) {
      lastChangeId = routing.changeId;
      history.pushState(null, routing.path);
    }
  });

  return function unsubscribe() {
    unsubscribeHistory();
    unsubscribeStore();
  };
}

module.exports = {
  UPDATE_PATH,
  updatePath,
  syncReduxAndRouter,
  routeReducer: update
};
