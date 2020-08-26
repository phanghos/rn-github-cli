import Axios from 'axios';

const baseUrl = 'https://api.github.com';

const endpoints = {
  searchRepositories: 'search/repositories',
};

let axios = undefined;

class ApiService {
  constructor() {
    axios = Axios.create({
      baseURL: baseUrl,
    });
  }

  fetchUserRepositories = (user) =>
    Axios.get(`${baseUrl}/users/${user}/repos`, {params: {type: 'all'}});

  fetchCommits = (user, repo) =>
    Axios.get(`${baseUrl}/repos/${user}/${repo}/commits`);

  fetchPullRequests = (user, repo) =>
    Axios.get(`${baseUrl}/repos/${user}/${repo}/pulls`);

  searchRepositories = (query) =>
    axios.get(endpoints.searchRepositories, {params: {q: query}});

  fetchPullRequest = (url) => Axios.get(url);
}

export const apiService = new ApiService();
