"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function CheckAllSites(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
        res.send("Checking all sites isn't configured yet");
    });
}
exports.default = CheckAllSites;
//# sourceMappingURL=CheckAllSites.js.map