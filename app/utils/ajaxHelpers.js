import axios from 'axios';

var username = 'kristyn-lyncheski';
var password = 'o6CuTKiabsLt';
var credentials = {
  headers: {'Authorization': 'Basic ' + btoa(username + ':' + password)}
};

var baseURL = 'https://api.github.com/'

const ajaxHelpers = {
  getUser: function(){
    return axios.get(baseURL + 'users/' + username, credentials)
  },
  getRepos: function(){
    return axios.get(baseURL + 'users/' + username + '/repos', credentials)
  },
  getIssues: function(repoName){
    return axios.get(baseURL + 'repos/' + username + '/' + repoName + '/issues?state=all' + '&' + (new Date), credentials)
  },
  createIssue: function(issueInfo, repoName){
    return axios.post(baseURL + 'repos/' + username + '/' + repoName + '/issues', issueInfo, credentials);
  },
  changeIssue: function(updatedInfo, repoName, issueNumber){
    return axios.patch(baseURL + 'repos/' + username + '/' + repoName + '/issues/' + issueNumber, updatedInfo, credentials)
  }
}

export default ajaxHelpers;
