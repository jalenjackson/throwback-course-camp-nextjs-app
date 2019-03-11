require('dotenv').config();
const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const PORT = process.env.PORT || 5000;

const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);

  server.get('*', (req, res) => {
    return handle(req, res)
  });
  
  server.listen(PORT, () => console.log(`Course Camp Consumer Running On PORT ${ PORT }`));
});
