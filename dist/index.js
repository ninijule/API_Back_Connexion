"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: __dirname + '/.env' });
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
routes_1.default.forEach((router) => {
    app.use(router.path, router.router);
});
// start the express server
app.listen(8000, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:8000`);
});
//# sourceMappingURL=index.js.map