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
require("dotenv");
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const command_js_1 = __importDefault(require("./api/controllers/command.js"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
const slackToken = process.env.SLACKBOT_TOKEN;
server.use('/api/commands', command_js_1.default);
const hostname = '127.0.0.1';
let port;
if (process.env.PORT) {
    port = parseInt(process.env.PORT);
}
else {
    port = 3000;
}
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        var urls = ['https://theurbanist.org'];
        if (urls) {
            urls.forEach(function (value) {
                return __awaiter(this, void 0, void 0, function* () {
                    const res = yield axios_1.default.get(value);
                    if (res.status != 200) {
                        const url = 'https://hooks.slack.com/services/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';
                        const res = yield axios_1.default.post(url, {
                            channel: '#test',
                            text: `${value} is down`
                        }, { headers: { authorization: `Bearer ${slackToken}` } });
                    }
                });
            });
        }
    });
}
run();
//# sourceMappingURL=app.js.map