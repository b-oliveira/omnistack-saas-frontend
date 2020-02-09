import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    console.tron.log('foi');
    history.push('/');
  } catch (err) {
    err.response.data.map(field => toast.error(field.message));
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/signin');
}

export function setToken({ payload }) {
  if (payload) {
    const { token } = payload.auth;

    if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
