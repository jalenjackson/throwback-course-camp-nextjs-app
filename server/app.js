require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const graphQlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./graphQL/schema');
const rootValue = require('./graphQL/resolvers');
const VerifyAuthentication = require('./middleware/verifyAuthentication');
const Uploaders = require('./uploaders/uploaderRoutes');
const APIRoutes = require('./APIRoutes/index');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(VerifyAuthentication);
  server.use('/uploaders', Uploaders);
  server.use('/api-routes', APIRoutes);
  server.use('/graphql', graphQlHTTP({
    schema,
    rootValue,
    graphiql: true
  }));

  server.use(handler);

  server.get('*', (req, res) => {
    return handle(req, res)
  });
  
  const mongoEnv = dev ? 'development' : 'production';
  
  console.log(`mongodb+srv://${ process.env.MONGO_USER }:${ process.env.MONGO_PASSWORD }@coursecamp-qxarr.mongodb.net/${ mongoEnv }?retryWrites=true`)
  
  return mongoose.connect(`mongodb+srv://${ process.env.MONGO_USER }:${ process.env.MONGO_PASSWORD }@coursecamp-qxarr.mongodb.net/${ mongoEnv }?retryWrites=true`,
    { useNewUrlParser: true })
    .then(() => {
      server.listen(5000, () => console.log(`Consumer GraphQL API Running On PORT 5000`));
    })
    .catch(err => console.log(err));
});
