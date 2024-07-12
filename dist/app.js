"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./route/routes");
const globalErrorHandler_1 = __importDefault(require("./middleWare/globalErrorHandler"));
const cors_1 = __importDefault(require("cors"));
// const app: Application = express()
const app = (0, express_1.default)();
//....... middleware
// app.use(cors({ origin: ['http://localhost:5173'] }))
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//...... application routes
app.use('/api', routes_1.routes);
app.get("/", (req, res) => {
    res.send("Welcome to FitZone Server");
});
// customize error
app.use(globalErrorHandler_1.default);
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({ success: false, message: 'Route not found',error: '' });
// });
exports.default = app;
