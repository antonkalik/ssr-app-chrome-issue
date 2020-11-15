import React from 'react';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: 'http://localhost:' + PORT,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', express.static('dist/public'));

app.get('*', (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);

  const markup = `
     <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Application</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script type="text/javascript" src="/client_bundle.js"></script>
      </body>
    </html>
`;

  res.status(200).send(`<!doctype html>${markup}`);
  res.end();
});

app.listen(PORT, () => {
  console.log('Application launched on port:', PORT);
});
