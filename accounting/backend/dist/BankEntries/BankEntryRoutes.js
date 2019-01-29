"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BankEntryController_1 = __importDefault(require("./BankEntryController"));
class BankEntryRoutes {
    constructor(app) {
        this.bankEntryController = new BankEntryController_1.default();
        app.get("/entries", this.bankEntryController.entries);
    }
}
exports.default = BankEntryRoutes;
//# sourceMappingURL=BankEntryRoutes.js.map