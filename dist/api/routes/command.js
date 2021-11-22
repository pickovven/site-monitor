"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importDefault(require("../controllers/command"));
const axios_1 = __importDefault(require("axios"));
const commandRouter = axios_1.default.post('./api/command', command_1.default);
exports.default = commandRouter;
//# sourceMappingURL=command.js.map