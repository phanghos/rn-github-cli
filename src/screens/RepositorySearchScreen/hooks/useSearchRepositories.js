import { useState, useCallback } from 'react';

const repoSearchMock = require('../../../mocks/repoSearchMock.json');

export const useSearchRepositories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const searchRepositories = useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      setRepos(repoSearchMock.items);
      setIsLoading(false);
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    setRepos([]);
  }, []);

  return { isLoading, repos, searchRepositories, reset };
};
