import Store from '../store/member';

export const initialState = Store;

export default function collectifyReducer(state = initialState, action) {
  switch (action.type) {
    case 'COLLECTIFY_ERROR': {
      if (action.data) {
        let newState = {...state}
        newState.error = action.data
        return newState
      }
    }
    case 'ACCOUNT_GET': {
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
