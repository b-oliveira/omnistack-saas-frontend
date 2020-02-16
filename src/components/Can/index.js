import { useSelector } from 'react-redux';

export default function Can({ children, role, permission }) {
  const { roles, permissions } = useSelector(state => state.team);

  function checkAccessRules() {
    if (role && !roles.includes(role)) return false;

    if (permission && !permissions.includes(permission)) return false;

    return true;
  }

  return typeof children === 'function'
    ? children(checkAccessRules())
    : checkAccessRules() && children;
}
