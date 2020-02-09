export function setCurrentTeam(currentTeam) {
  return {
    type: '@team/SET_CURRENT_TEAM',
    payload: {
      currentTeam,
    },
  };
}
