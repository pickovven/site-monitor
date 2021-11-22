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
const AddSite_1 = __importDefault(require("../../functions/AddSite"));
const CheckSite_1 = __importDefault(require("../../functions/CheckSite"));
const CheckAllSites_1 = __importDefault(require("../../functions/CheckAllSites"));
/*
    Application currently supports two commands
    1. /monitor -- add URLs to the monitoring databse
    2. /check -- test that a URL is live
*/
const commandController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method == "POST") {
        if (req.body.command == "/monitor") {
            (0, AddSite_1.default)(req, res);
        }
        else if (req.body.command == "/check") {
            if (req.body.text) {
                (0, CheckSite_1.default)(req, res);
            }
            else if (!req.body.text || req.body.text == "all") {
                (0, CheckAllSites_1.default)(req, res);
            }
        }
        else {
            res.send("You must pass a POST request.");
        }
    }
    else {
        res.send("You must pass a POST request.");
    }
});
exports.default = commandController;
//# sourceMappingURL=command.js.map