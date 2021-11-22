import 'dotenv';
import axios from 'axios';
import express from 'express';

const server = express()
const hostname = '127.0.0.1';
const port = 3000;
const slackToken = process.env.SLACKBOT_TOKEN;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function run() {
  const url = 'https://hooks.slack.com/services/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';
  const res = await axios.post(url, {
    channel: '#test',
    text: 'Hello Pam! I\'m a slackbot'
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}

run()