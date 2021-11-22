import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

let command = new Array
let siteMap = new Map
let prisma = new PrismaClient()

async function AddSite(req: Request, res: Response) {
	// Regex to split the command based on whitespace unless it's in quotes
	command = req.body.text.split(' ');
	// TODO: would be good to do data sanity on the URL
	siteMap.set("url", command[0])
	siteMap.set("frequency",command[1])
	siteMap.set("name",command[2]) 
	if (siteMap.has("url")) {
		try {
			const site = await prisma.site.create({
				data: {
					url: siteMap.get("url"),
					frequency: parseInt(siteMap.get("frequency")),
					name: siteMap.get("name")
				},
			})
			res.send(`Successfully added ${siteMap.get('name')} for monitoring`)
		} 
		catch(error) {
			error
			let errorMap = JSON.parse(JSON.stringify(error))
			if(errorMap["code"] == "P2002") {
				res.send("URL is already saved. Please provide a unique URL")
			}
			else {
				res.send("Prisma error: " + error)
			}
		}
	} 
	else {
		res.send("URL is a required parameter")
	}
}

export default AddSite