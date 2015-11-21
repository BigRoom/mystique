export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    constant = constant.replace(/ /ig, '_').toUpperCase();
    acc[constant] = constant;
    return acc;
  }, {});
};

export function createReducer(reducerMap, initialState) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function observeStore(store, select, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
