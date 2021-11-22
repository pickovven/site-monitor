import { Request, Response } from 'express';
import AddSite from '../../functions/AddSite';
import CheckSite from '../../functions/CheckSite';
import CheckAllSites from '../../functions/CheckAllSites';

/*
	Application currently supports two commands
	1. /monitor -- add URLs to the monitoring databse
	2. /check -- test that a URL is live
*/

const commandController = async (req: Request, res: Response) => {
	if(req.method == "POST") {	
		if (req.body.command == "/monitor") {
			AddSite(req, res)
		} else if(req.body.command == "/check") {
			if(req.body.text) {
				CheckSite(req,res)
			} else if(!req.body.text || req.body.text == "all") {
				CheckAllSites(req,res)
			}
		} else {
			res.send("You must pass a POST request.");
		}
	}
	else
		{
			res.send("You must pass a POST request.");
		}
};

export default commandController;