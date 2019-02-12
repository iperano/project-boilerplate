export const homeReducer = (state = { number: 0, word: '', beers: [], cardevents: [], menulinks: [], popupBeer: {}, }, action) => {
  switch (action.type) {
    case 'SET-CARD':
      const currentCardEvents = state.cardevents.slice();
      currentCardEvents.push(action.objCard);
      //return Object.assign({}, state, { cardevents: currentCardEvents });
      return {
        ...state,
        cardevents: currentCardEvents,
      };
    case 'REMOVE-CARDEVENT':
      const stateCartEvents = state.cardevents.slice();
      stateCartEvents.pop(action.objCard);
      return Object.assign({}, state, { cardevents: stateCartEvents });
      
    case 'INCREASE':
      return Object.assign({}, state, { number: state.number + action.value });
    case 'SET-WORD':
      return Object.assign({}, state, { word: action.value });
      case 'SHOW_POPUP':
      return {
        ...state,
        popup: action.value,
      };
    case 'REMOVE_POPUP':
      return {
        ...state,
        popup: {},
      };
    default:
      return state;
  }
};
