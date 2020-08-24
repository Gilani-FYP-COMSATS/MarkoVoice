import axios from 'axios';
import { setAlert } from './alert';
import { GET_CONFIGURATION, CONFIGURATION_ERROR } from './types';

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
    console.log('inside creatConfig');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    //const res = await axios.post('/api/configurations', formData, config);

    dispatch({
      type: GET_CONFIGURATION,
      //payload: res.data,
    });

    dispatch(setAlert(edit ? 'Cofigurtion updated' : 'Configuration Created'));
    if (!edit) {
      history.push('/dashboard');
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      console.log('error while adding config in DB: ' + error.msg);
      //errors.foreach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
