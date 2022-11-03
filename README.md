# Task 2 - API - React (Single Page Application)
[![Build Task2](https://github.com/sirawat21/drive-iq/actions/workflows/github-actions-build.yml/badge.svg?branch=task-2&event=push)](https://github.com/sirawat21/drive-iq/actions/workflows/github-actions-build.yml)
## Description
The CLI program displays the result from API. The presented result is based on two passed arguments(ctegory, limit).
## Screenshot
![](https://media.giphy.com/media/aMg3ltBLJZpvagL01m/giphy.gif)
## API 
|Source|URL|
|---|---|
|Publicapis|https://api.publicapis.org/entries|
## Installation
Installing manual dependency commands
```
   npm install -D npm-run-all @babel/cli @babel/core @babel/node \
   @babel/plugin-proposal-class-properties @babel/preset-env;
   npm install sort-json-array
```
or install from package.json
```
   npm install
```
## Usage
Exmaple command 
`$ node app <category> <limit>`

|Argument|Type|Value|
|---|---|---|
|category|Sting|Animals, Anime, Blockchain, Books, Weather, Music, Jobs, etc|
|limit| Number|0-9|
 

Execute from ES6 Javascript by using babel-node
```
   npx babel-node app Weather 5
```
Execute from pure Javascript build file
```
   node ./dist/app Weather 5
```
Build command (build file will locate in ./dist)
```
   npm run build
```
## Instructions
### Tasks:
- [x] Write code inside the file which fetches data from the API and prints the values of ‘API’ decreasing alphabetically
- [x] The file accepts two arguments ‘category’ and ‘limit’
- [x] Print the results matching the ‘category’ and ‘limit’ is the number of results to
print eg: php file.php Weather 5
- [x] If no records matches the category, print ‘No results’
## References
- Babel [sorce](https://babeljs.io/docs/en/)
- NPM Run All [sorce](https://www.npmjs.com/package/npm-run-all)
- Sort Json Array [sorce](https://www.npmjs.com/package/sort-json-array)