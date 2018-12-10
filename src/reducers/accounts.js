// users reducer

const INITIAL_STATE = {
}

const getRandomID = () => Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

export default function accounts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        [getRandomID()]: 0,
      };

    case 'INCREMENT':
      return {
        ...state,
        [action.id]: state[action.id] + 1,
      };

    case 'DECREMENT':
      return {
        ...state,
        [action.id]: state[action.id] - 1,
      };

    case 'DELETE':
      const {
        [action.id]: _,
        ...newState
      } = state;

      return newState;

    // initial state
    default:
      return state;
  }
}
