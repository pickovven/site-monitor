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
const client_1 = require("@prisma/client");
let command = new Array;
let siteMap = new Map;
let prisma = new client_1.PrismaClient();
function AddSite(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Regex to split the command based on whitespace unless it's in quotes
        command = req.body.text.split(' ');
        // TODO: would be good to do data sanity on the URL
        siteMap.set("url", command[0]);
        siteMap.set("frequency", command[1]);
        siteMap.set("name", command[2]);
        if (siteMap.has("url")) {
            try {
                const site = yield prisma.site.create({
                    data: {
                        url: siteMap.get("url"),
                        frequency: parseInt(siteMap.get("frequency")),
                        name: siteMap.get("name")
                    },
                });
                res.send(`Successfully added ${siteMap.get('name')} for monitoring`);
            }
            catch (error) {
                error;
                let errorMap = JSON.parse(JSON.stringify(error));
                if (errorMap["code"] == "P2002") {
                    res.send("URL is already saved. Please provide a unique URL");
                }
                else {
                    res.send("Prisma error: " + error);
                }
            }
        }
        else {
            res.send("URL is a required parameter");
        }
    });
}
exports.default = AddSite;
//# sourceMappingURL=AddSite.js.map