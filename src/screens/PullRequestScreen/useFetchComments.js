import { useState, useEffect } from 'react';
const mockJson = require('../../mocks/commentsMock.json');

export const useFetchComments = () => {
  const [comments, setComments] = useState();

  useEffect(() => {
    setComments(mockJson);
  }, []);

  return comments;
};
