import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

const prisma = new PrismaClient()

const commandController = async (req: Request, res: Response) => {
	if(req.method == "POST")
		{
			res.send("POST new permit")
			const url = req.body?.url
			const name = req.body?.name
			const frequency = req.body?.frequency ?? 6000
			if (url) {
				const site = await prisma.site.create({
					data: {
						url: url,
						frequency: frequency,
						name: name
					},
				})
			} 
			else {
				res.send("URL is a required parameter")
			}
			
		}
	else
		{
			res.end("Undefined request .");
		}
};

export default commandController;