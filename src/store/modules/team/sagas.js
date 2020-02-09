import { all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

export function setCurrentTeam(currentTeam) {
  if (currentTeam) api.defaults.headers.TEAM = currentTeam.slug;
}

export default all([
  takeLatest('persist/REHYDRATE', ({ payload }) => {
    if (payload) {
      const { currentTeam } = payload.team;

      setCurrentTeam(currentTeam);
    }
  }),
  takeLatest('@team/SET_CURRENT_TEAM', ({ payload }) => {
    const { currentTeam } = payload;

    setCurrentTeam(currentTeam);
  }),
]);
