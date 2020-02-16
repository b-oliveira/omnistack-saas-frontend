import produce from 'immer';

const INITIAL_STATE = {
  currentTeam: null,
  roles: [],
  permissions: [],
};

export default function team(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case '@team/SET_CURRENT_TEAM': {
        draft.currentTeam = payload.currentTeam;
        break;
      }
      case '@team/SET_ACCESS_RULES': {
        const { roles, permissions } = payload;

        draft.roles = roles;
        draft.permissions = permissions;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.currentTeam = null;
        draft.roles = [];
        draft.permissions = [];
        break;
      }
      default:
    }
  });
}
