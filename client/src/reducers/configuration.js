import {
  CONFIGURATION_ERROR,
  GET_CONFIGURATION,
  CLEAR_CONFIGURATION,
  UPDATE_CONFIGURATION,
} from '../actions/types';

const initialState = {
  configuration: null,
  configurations: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CONFIGURATION:
    case UPDATE_CONFIGURATION:
      return {
        ...state,
        configuration: payload,
        loading: false,
      };
    case CONFIGURATION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // clear configuration data when user logged out!
    case CLEAR_CONFIGURATION:
      return {
        ...state,
        configuration: null,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
}
