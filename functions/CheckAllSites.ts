import { Request, Response } from 'express';

async function CheckAllSites(req:Request, res:Response) {
	/*
				TODO: Add in a handler for checking all the sites

				const allSites = await prisma.site.findMany(req.body.text)
				let status = {}
				for (let s in allSites) {
					let url = JSON.parse(s).url
					let name = JSON.parse(s).name
					axios.get(url)
						.then((response) => {})
						.catch(function (error) {
							if (error.response) {
								status.set(["name",name)
							} 
							else {
								res.send(`${name} is live`)
							}	
						})
				}
	*/
	res.send("Checking all sites isn't configured yet")
}


export default CheckAllSites