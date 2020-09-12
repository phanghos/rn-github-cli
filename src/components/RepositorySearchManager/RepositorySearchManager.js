import React from 'react';
import { RepoSearchContext } from '@context/RepoSearchContext';
import { useSearchRepositories } from '@screens/RepositorySearchScreen/hooks/useSearchRepositories';

export const RepositorySearchManager = ({ children }) => {
  const { isLoading, repos, searchRepositories, reset } = useSearchRepositories(
    RepoSearchContext,
  );

  return (
    <RepoSearchContext.Provider
      value={{
        isLoading,
        repos,
        searchRepositories,
        reset,
      }}>
      {children}
    </RepoSearchContext.Provider>
  );
};
