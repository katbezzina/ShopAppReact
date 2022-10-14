import { useAuth } from "../Context/AuthContext";

function useIsAuthenticated() {
  const { user } = useAuth();

  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
}

export default useIsAuthenticated;
