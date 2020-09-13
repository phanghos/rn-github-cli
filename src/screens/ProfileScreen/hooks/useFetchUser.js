import { useState, useCallback, useEffect } from 'react';

const userMock = require('../../../mocks/userMock.json');

export const useFetchUser = ({ username = '', fetchOnMount = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();

  // eslint-disable-next-line no-shadow
  const fetchUser = useCallback(username => {
    setIsLoading(true);

    setTimeout(() => {
      setUser(userMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchOnMount && username && fetchUser(username);
  }, [fetchOnMount, username, fetchUser]);

  return { isLoading, user, fetchUser };
};
