"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BankEntryRoutes_1 = __importDefault(require("./BankEntries/BankEntryRoutes"));
class Routes {
    constructor(app) {
        const bankEntryRoutes = new BankEntryRoutes_1.default(app);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map