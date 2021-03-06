import * as express from "express";
import {getConnection} from "typeorm";
import {BankEntry} from "../entity/BankEntry";

class BankEntryController {

    public async entries(req: express.Request, res: express.Response) {
        try {
            let bankEntries = await getConnection().getRepository(BankEntry).find();
            bankEntries = bankEntries.map(bankEntry => { // TODO: stopgap measure because of typeorm issue with decimals
                bankEntry.value = Number(bankEntry.value)
                return bankEntry
            })
            res.send(bankEntries);
        } catch (e) {
            res.status(400).send(e);
        }

    }

}

export default BankEntryController;
