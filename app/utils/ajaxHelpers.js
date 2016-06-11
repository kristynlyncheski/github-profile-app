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
    return axios.get(baseURL + 'repos/' + username + '/' + repoName + '/issues?state=all', credentials)
  },
  // createIssue: function(issue){
  //   return axios.post(baseURL + 'repos/' + username + '/group-project-three-backend/issues', issue, credentials)
  // },
  // editIssue: function(issue){
  //   return axios.patch(baseURL + 'repos/' + username + '/group-project-three-backend/issues', issue, credentials)
  // },
  changeIssueState: function(newState, repoName, issueNumber){
    return axios.patch(baseURL + 'repos/' + username + '/' + repoName + '/issues/' + issueNumber, newState, credentials)
  }
}

export default ajaxHelpers;