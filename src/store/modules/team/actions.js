export function setCurrentTeam(currentTeam) {
  return {
    type: '@team/SET_CURRENT_TEAM',
    payload: {
      currentTeam,
    },
  };
}

export function setAccessRules(roles, permissions) {
  return {
    type: '@team/SET_ACCESS_RULES',
    payload: {
      roles,
      permissions,
    },
  };
}
