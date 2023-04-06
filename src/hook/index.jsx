import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

function useUserContext() {
  const [user, setUser] = useContext(UserContext);
  return [user, setUser];
}

export { useUserContext };
