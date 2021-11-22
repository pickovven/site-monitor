# site-monitor

Setup website monitoring from within Slack

## First Time Setup

### Prerequisites
1. Install PSQL
2. Install NPM
3. Setup a slackbot
4. If deploying locally, you may need to use [ngrok](https://slack.dev/node-slack-sdk/tutorials/local-development#using-a-local-request-URL-for-development)

### Getting Started

1. `git clone git@github.com:pickovven/site-monitor.git` 
2. Setup a psql DB with the name "sites". Example for linux: `sudo -u postgres psql -c "CREATE DATABASE sites;"`
3. Start the psql server `sudo service postgresql start`
4. Create an `.env` file in the project root folder and add the following:
```
SLACKBOT_TOKEN="{enter token}"
DATABASE_URL="postgresql://{PSQL Username}:{PSQL Password}@{HOST}:{PORT}/{DB NAME}?schema=public"
```
5. Replace the databse and slackbot information with your environment's setup
6. run `npm install`
7. run `npm start`

## Start again
1. Navigate to root folder
2. Run `npm start`

## Using the database

The project uses [prisma](https://www.prisma.io/). 

## Using the App

After adding the app to your workspace, there are two commands

`/monitor` : add sites that can be monitored to the DB.
`/check` : check if a site is live
