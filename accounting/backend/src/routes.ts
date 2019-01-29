import * as express from "express";
import BankEntryRoutes from "./BankEntries/BankEntryRoutes";

class Routes {

    constructor(app: express.Application) {
        const bankEntryRoutes =  new BankEntryRoutes(app);
    }

}

export default Routes;
