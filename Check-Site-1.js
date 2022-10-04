import { Request, Response } from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient()

async function CheckSite(req:Request, res:Response) {
	const site = await prisma.site.findUnique({
		where: {
			url: req.body.text,
		},
	})
	if (site?.url) {
		axios.get(site.url)
		.then((response) => {
			if(response.status === 200) {
				return res.send(`${site?.name ?? ""} is live`)
			}
		})
		.catch(function (error) {
			if (error.response) {
				res.send(`${site?.name} returned an error`)
			} else if (error.request){
				res.send("There was an issue with the request. Is the URL valid?")
			}
			else {
				res.send(`${site?.name ?? ""} is live`)
			}	
		})
	}	
}

export default CheckSite
