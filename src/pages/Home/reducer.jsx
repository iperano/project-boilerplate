export const homeReducer = (state = { number: 0, word: '' }, action) => {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, { number: state.number + action.value });
    case 'SET-WORD':
      return Object.assign({}, state, { word: action.value });
    default:
      return state;
  }
};
