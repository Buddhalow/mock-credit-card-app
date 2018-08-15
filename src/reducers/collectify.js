import Store from '../store/member';

export const initialState = Store;

export default function collectifyReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACCOUNT_FETCH': {
      if (action.data) {
        let newState = {...state}
        newState.account = action.data
        newState.error = false
        return newState
      }
      return initialState;
    }
    default:
      return state;
  }
}
