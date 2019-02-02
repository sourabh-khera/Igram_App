import { RECEIVE_API, REQUEST_API } from '../constants';

const initialState = {
    showLoader: false,
}

const enableLoader = state => ({ ...state, showLoader: true });
const disableLoader = state => ({ ...state, showLoader: false});

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
      case RECEIVE_API:
        return disableLoader(state);
      case REQUEST_API:
        return enableLoader(state);

      default: return state;
    }
};

export default commonReducer;
