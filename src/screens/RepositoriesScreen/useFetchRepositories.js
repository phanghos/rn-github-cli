import { useState, useEffect, useCallback } from 'react';
import { apiService } from '@api';

const repoMock = require('../../mocks/repositoriesMock.json');

export const useFetchRepositories = user => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState();

  const fetchRepositories = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      setRepos(repoMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // apiService
    //   .fetchUserRepositories(user)
    //   .then(({ data }) => setRepos(data))
    //   .finally(() => setIsLoading(false));
    fetchRepositories();
  }, [fetchRepositories]);

  return { isLoading, repos, fetchRepositories };
};
