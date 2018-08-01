class Github {
  constructor(clientId, clientSecret) {
    this.client_id = clientId;
    this.client_secret = clientSecret;
    this.repos_count = 10;
    this.repo_sort = 'created: asc';
  }

  async fetchUser(user) {
    const userDataRequest = await fetch
    (`http://api.github.com/users/${user}?client_id=${this.client_id}&
    client_secret=${this.client_secret}`);
    const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&
    client_secret=${this.client_secret}&per_page=${this.repos_count}&sort={this.repo_sort}`);
    const repositories = await repositoriesRequest.json();
    const userData = await userDataRequest.json();

    return {
      userData,
      repositories
    };
  }
}

module.exports = Github;