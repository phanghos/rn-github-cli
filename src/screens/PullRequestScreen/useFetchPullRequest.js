import { useState, useEffect } from 'react';
import { apiService } from '@api';

const mockJson = require('../../mocks/pullRequestMock.json');

export const useFetchPullRequest = url => {
  const [isLoading, setIsLoading] = useState(true);
  const [pullRequest, setPullRequest] = useState();

  useEffect(() => {
    // apiService.fetchPullRequest(url).then(({data}) => {
    //   setPullRequest(data);
    //   setIsLoading(false);
    // });
    setTimeout(() => {
      setPullRequest(mockJson);
      setIsLoading(false);
    }, 0);
  }, []);

  return { isLoading, pullRequest };
};
