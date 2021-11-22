import 'dotenv';
import axios from 'axios';
import express from 'express';
import commandRouter from './api/controllers/command.js'

const server = express()
server.use(express.json());
const slackToken = process.env.SLACKBOT_TOKEN;
server.use('/api/commands', commandRouter)

const hostname = '127.0.0.1';

let port: number 
if(process.env.PORT) {
	port = parseInt(process.env.PORT)
}
else {
	port = 3000;
}  
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function run() {
  var urls = ['https://theurbanist.org'];
	if (urls) {
		urls.forEach(async function(value) {
			const res = await axios.get(value);
			if(res.status != 200) {
				const url = 'https://hooks.slack.com/services/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';
				const res = await axios.post(url, {
					channel: '#test',
					text: `${value} is down`
				}, { headers: { authorization: `Bearer ${slackToken}` } });
			}
		});
		
	}
}

run()