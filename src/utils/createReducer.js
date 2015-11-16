export default function createReducer (reducerMap, initialState) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action) : state;
  };
}
