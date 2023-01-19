import { createReducer } from '@reduxjs/toolkit';
import { InfoleActionCreators } from '../actions/actions';

const defaultState = {
  data: [],
};

export default createReducer(defaultState, {
  [InfoleActionCreators.addPrivatInfo.type]: ({ data }, action) => {
    console.log('data', data);
    console.log('action', action);

    data.push(action.payload);
  },
});
