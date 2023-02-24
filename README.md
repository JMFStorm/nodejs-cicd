# Node.js CI/CD Example App

## About

This project contains an example starting point for creating Node.js Express apps.

It includes basic testing and linting and an automated CI/CD pipeline in the form of GitHub Actions.

## Npm libararies used

- Express
- Axios
- ESLint
- Jest
- Supertest
- pm2

## More details

Install the npm packages and run the app:
```javascript
npm install && npm run start
```

Send a HTTP GET request to "<base_url>/pokemon-of-the-day"
- Include a 'Version' header in the request ('1' or '2') to get the pokemon of the day

Run the linter:
```javascript
npm run lint
```

Run unit tests including a test coverage report:
```javascript
npm run testst:unit:coverage
```

Install pm2 as a global package and then run the intagration tests:
```javascript
npm install pm2 -g && npm run tests:integration:process
```
