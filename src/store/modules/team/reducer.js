import produce from 'immer';

const INITIAL_STATE = {
  currentTeam: null,
};

export default function team(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@team/SET_CURRENT_TEAM': {
        draft.currentTeam = action.payload.currentTeam;
        break;
      }
      default:
    }
  });
}
