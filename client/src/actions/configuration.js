import axios from 'axios';
import { setAlert } from './alert';
import {
  UPDATE_CONFIGURATION,
  GET_CONFIGURATION,
  CONFIGURATION_ERROR,
} from './types';

//get current users profile
export const getCurrentConfiguration = () => async (dispatch) => {
  try {
    const res = await axios.get('api/configurations/me');

    dispatch({
      type: GET_CONFIGURATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONFIGURATION_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const createConfiguration = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    //console.log(formData);
    createConfiguration.called = true;
    const res = await axios.post('/api/configurations', formData, config);

    dispatch({
      type: GET_CONFIGURATION,
      payload: res.data,
    });

    dispatch(
      setAlert(
        edit ? 'Cofigurtion updated' : 'Configuration Created',
        'success'
      )
    );
    // if (!edit) {
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CONFIGURATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add domainInfo
export const addDomainInfo = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    //console.log(formData);
    const res = await axios.put(
      '/api/configurations/domainInfo',
      formData,
      config
    );

    dispatch({
      type: UPDATE_CONFIGURATION,
      payload: res.data,
    });

    dispatch(setAlert('Product added to configuration', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CONFIGURATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
