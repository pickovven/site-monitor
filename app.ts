import 'dotenv';
import axios from 'axios';
import express from 'express';
import commandRouter from './api/controllers/command.js'


const server = express()
server.use(express.json());
const slackToken = process.env.SLACKBOT_TOKEN;
server.use('/api/commands', commandRouter)

async function run() {
  const url = 'https://hooks.slack.com/services/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';
  const res = await axios.post(url, {
    channel: '#test',
    text: 'Hello Pam! I\'m a slackbot'
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}

run()