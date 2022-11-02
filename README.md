# Task 2 - API – (NODE.js)
Create a file which when executed from the command line, prints the values based on the arguments passed.
---
## Example of command
Execute ES6 Javascript file:
```
   npx babel-node app Weather 5
```
Execute pure Javascript file:
```
   node ./dist/app Weather 5
```
ES6 file build command
```
   npm run build
```
## Dependencies install
Development dependency
```
   npm install -D npm-run-all @babel/cli @babel/core @babel/node \
   @babel/plugin-proposal-class-properties @babel/preset-env
```
In use dependency
```
   npm install sort-json-array
```
## API link
[https://api.publicapis.org/entries](https://api.publicapis.org/entries)
## Instructions
- [x] Write code inside the file which fetches data from the API and prints the values of ‘API’ decreasing alphabetically
- [x] The file accepts two arguments ‘category’ and ‘limit’
- [x] Print the results matching the ‘category’ and ‘limit’ is the number of results to
print eg: php file.php Weather 5
- [x] If no records matches the category, print ‘No results’
## Arguments (based on category)
+ Animals
+ Anime
+ Blockchain
+ Books
+ Business
+ Calendar
+ Weather
+ Transportation
+ Health
+ Jobs
+ Music