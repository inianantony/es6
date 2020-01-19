# es6
features of es6

# Step 1

## Create a Node js project
1. create a new directory `mkdir es6`
2. init the folder for npm package `npm init`
3. Fill up the necessary details for the `package.json` file
4. install npm Express `npm install express`
5. Add the following npm code for start node server
```javascript
"scripts": {
    "test": "test",
    "start": "npm run open",
    "open": "concurrently \"http-server -o -a localhost -p 3000\" \"open http://localhost:3000\""
},
```
6. Add the following code to `index.js` to make the file serve the html in node server
```javascript
const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
```
7. Add an `index.html` file