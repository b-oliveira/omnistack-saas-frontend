import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { setAccessRules } from './actions';

export function* setCurrentTeam({ payload }) {
  if (payload) {
    const { currentTeam } = payload.team || payload;

    if (currentTeam) {
      api.defaults.headers.TEAM = currentTeam.slug;

      const response = yield call(api.get, 'permissions');

      const { roles, permissions } = response.data;

      yield put(setAccessRules(roles, permissions));
    }
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setCurrentTeam),
  takeLatest('@team/SET_CURRENT_TEAM', setCurrentTeam),
]);
