GitHub 2.0
by Kristyn Lyncheski

- To avoid exposing a personal password on GitHub, I created a placeholder GitHub account and hard-coded those credentials for the API calls.

### BUILD INSTRUCTIONS
- Install node modules, using 'npm install' in Terminal
- Run the app on local host by running 'npm start' from the app folder in Terminal

### USAGE INSTRUCTIONS
- Profile
  * View this user's profile information, such as his/her bio, location, website, email address and date joined
  * Use the 'View All Repos' button to open the panel showing all of this user's repositories
- Repositories
  * Use the 'View on GitHub' link to open a new tab of the repository on GitHub
  * Create a new issue directly in the app with the 'New Issue' button
    * Enter a title and body in the modal window, then click the submit button
  * View all issues (open and closed) with the 'View Issues' button
- Issues
  * Edit an existing issue with the "Edit" button
    * Update the title and/or body in the modal window, then click the submit button
  * Open or close an existing issue with the "Open"/"Close" buttons
  * When an issue is created or edited, the issues panel closes. When the 'View' button is clicked again, the API is called again with a date parameter to avoid caching data.
    * GitHub API calls do not find updated data because the query appears to cache the data

### FEATURES/DETAILS TO BE ADDED
- Only five repos would show per page to avoid long pages.
- A button on the issues card would allow a user to filter between open, closed or all issues.
- CSS changes
  * Repo and issues modules would slide out when opened and slide back when closed
