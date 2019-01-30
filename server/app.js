const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const graphQlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphQL/schema');
const rootValue = require('./graphQL/resolvers');
const VerifyAuthentication = require('./middleware/verifyAuthentication');
const { URLMAP }  = require('../URLMap');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(VerifyAuthentication);
  server.use('/graphql', graphQlHTTP({
    schema,
    rootValue,
    graphiql: true
  }));

  server.get('/_next/*', (req, res) => {
    handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    handle(req, res);
  });

  server.get('*', (req, res) => {
    const url = URLMAP[req.path];
    if (url) {
      app.render(req, res, url);
    } else {
      handle(req, res);
    }
  });

  return mongoose.connect(`mongodb+srv://${ process.env.MONGO_USER }:${ process.env.MONGO_PASSWORD }@quizopcluster-16smp.mongodb.net/${ process.env.MONGO_DB_DEV }?retryWrites=true`,
    { useNewUrlParser: true })
    .then(() => {
      server.listen(5000, () => console.log(`Consumer GraphQL API Running On PORT 5000`));
    })
    .catch(err => console.log(err));
});
