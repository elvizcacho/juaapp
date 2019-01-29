import * as express from "express";
import BankEntryController from "./BankEntryController";

class BankEntryRoutes {

    public bankEntryController = new BankEntryController();

    constructor(app: express.Application) {
        app.get("/entries", this.bankEntryController.entries);

    }

}

export default BankEntryRoutes;
