export const increase = value => ({
  type: 'INCREASE',
  value,
});

export const setWord = value => ({
    type: 'SET-WORD',
    value,
});

export const showPopup = value => ({
  type: 'SHOW_POPUP',
  value,
});
export const removePopup = () => ({
  type: 'REMOVE_POPUP',
});

export const setCardEvents = objCard => ({
  type: 'SET-CARD',
  objCard,
});
export const removeCardEvents = objCard => ({
  type: 'REMOVE-CARDEVENT',
  objCard,
});
