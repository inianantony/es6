# es6
features of es6

## Create a Node js project
1. create a new directory `mkdir es6`
2. init the folder for npm package `npm init`
3. Go to github and create a new repository with the same name as `es6`
4. Add `gitignore` and `MIT` liscense
5. Fill up the necessary details for the `package.json` file
6. Make the folder a git repository by `git init`
7. stage the file to git by `git add .`
8. bind to the remote repository by `git remote add origin https://github.com/inianantony/advanced_js.git`
9. pull from the remote master by `git pull remote master`
10. Commit the staged file by `git commit -m "add package.json"`
11. For first time git push fire the command ` git push --set-upstream origin master`
12. install npm Express `npm install express`
13. Add the following npm code for start node server
```javascript
"scripts": {
    "test": "test",
    "start": "npm run open",
    "open": "concurrently \"http-server -o -a localhost -p 3000\" \"open http://localhost:3000\""
},
```
14. Add the following code to `index.js` to make the file serve the html in node server
```javascript
const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
```
15. Add an `index.html` file

## Code explanation

1. `promise.js` file explaining the concepts of promise
