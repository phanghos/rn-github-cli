import Axios from 'axios';
import { clientId, clientSecret } from '../config';

const baseUrl = 'https://api.github.com';

const endpoints = {
  user: 'user',
  searchRepositories: 'search/repositories',
};

export const apiService = (function apiService() {
  const axios = Axios.create({
    baseURL: baseUrl,
  });

  const requestAccessToken = (code, state) =>
    Axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
      state,
    });

  const user = () =>
    Axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token TOKEN`,
      },
    });

  const fetchUserRepositories = username =>
    Axios.get(`${baseUrl}/users/${username}/repos`, {
      params: { type: 'all' },
    });

  const fetchCommits = (username, repo) =>
    Axios.get(`${baseUrl}/repos/${username}/${repo}/commits`);

  const fetchPullRequests = (username, repo) =>
    Axios.get(`${baseUrl}/repos/${username}/${repo}/pulls`);

  const searchRepositories = query =>
    axios.get(endpoints.searchRepositories, { params: { q: query } });

  const fetchPullRequest = url => Axios.get(url);

  const fetchIssues = url => Axios.get(url);

  return {
    requestAccessToken,
    user,
    fetchUserRepositories,
    fetchCommits,
    fetchPullRequests,
    searchRepositories,
    fetchPullRequest,
    fetchIssues,
  };
})();
