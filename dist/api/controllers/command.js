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
const prisma = new client_1.PrismaClient();
const commandController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    if (req.method == "POST") {
        res.send("POST new permit");
        const url = (_a = req.body) === null || _a === void 0 ? void 0 : _a.url;
        const name = (_b = req.body) === null || _b === void 0 ? void 0 : _b.name;
        const frequency = (_d = (_c = req.body) === null || _c === void 0 ? void 0 : _c.frequency) !== null && _d !== void 0 ? _d : 6000;
        if (url) {
            const site = yield prisma.site.create({
                data: {
                    url: url,
                    frequency: frequency,
                    name: name
                },
            });
        }
        else {
            res.send("URL is a required parameter");
        }
    }
    else {
        res.end("Undefined request .");
    }
});
exports.default = commandController;
//# sourceMappingURL=command.js.map