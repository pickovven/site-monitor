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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
let prisma = new client_1.PrismaClient();
function CheckSite(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const site = yield prisma.site.findUnique({
            where: {
                url: req.body.text,
            },
        });
        if (site === null || site === void 0 ? void 0 : site.url) {
            axios_1.default.get(site.url)
                .then((response) => {
                var _a;
                if (response.status === 200) {
                    return res.send(`${(_a = site === null || site === void 0 ? void 0 : site.name) !== null && _a !== void 0 ? _a : ""} is live`);
                }
            })
                .catch(function (error) {
                var _a;
                if (error.response) {
                    res.send(`${site === null || site === void 0 ? void 0 : site.name} returned an error`);
                }
                else if (error.request) {
                    res.send("There was an issue with the request. Is the URL valid?");
                }
                else {
                    res.send(`${(_a = site === null || site === void 0 ? void 0 : site.name) !== null && _a !== void 0 ? _a : ""} is live`);
                }
            });
        }
    });
}
exports.default = CheckSite;
//# sourceMappingURL=CheckSite.js.map