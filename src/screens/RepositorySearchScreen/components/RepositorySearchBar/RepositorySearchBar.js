import React, { useContext } from 'react';
import { SearchBar } from '@components';
import { RepoSearchContext } from '@context/RepoSearchContext';

export const RepositorySearchBar = () => {
  const { searchRepositories } = useContext(RepoSearchContext);

  return <SearchBar onSubmit={searchRepositories} />;
};
