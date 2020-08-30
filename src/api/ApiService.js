import Axios from 'axios';
import { clientId, clientSecret } from '../config';

const baseUrl = 'https://api.github.com';

const endpoints = {
  user: 'user',
  searchRepositories: 'search/repositories',
};

let axios = undefined;

class ApiService {
  constructor() {
    axios = Axios.create({
      baseURL: baseUrl,
    });
  }

  requestAccessToken = (code, state) =>
    Axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
      state,
    });

  user = () =>
    Axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token TOKEN`,
      },
    });

  fetchUserRepositories = user =>
    Axios.get(`${baseUrl}/users/${user}/repos`, { params: { type: 'all' } });

  fetchCommits = (user, repo) =>
    Axios.get(`${baseUrl}/repos/${user}/${repo}/commits`);

  fetchPullRequests = (user, repo) =>
    Axios.get(`${baseUrl}/repos/${user}/${repo}/pulls`);

  searchRepositories = query =>
    axios.get(endpoints.searchRepositories, { params: { q: query } });

  fetchPullRequest = url => Axios.get(url);

  fetchIssues = url => Axios.get(url);
}

export const apiService = new ApiService();
