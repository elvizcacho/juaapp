import * as express from "express";
import {getConnection} from "typeorm";
import {BankEntry} from "../entity/BankEntry";

class BankEntryController {

    public async entries(req: express.Request, res: express.Response) {
        try {
            const bankEntries = await getConnection().getRepository(BankEntry).find();
            res.send(bankEntries);
        } catch (e) {
            res.status(400).send(e);
        }

    }

}

export default BankEntryController;
