import {getConnection} from 'typeorm';
import {BankEntry} from '../entity/BankEntry';
import * as seeds from './seeds';

export class BankEntrySeeder {

    bankEntry = getConnection().getRepository(BankEntry);

    async populate() {
        console.log('Populating BankEntries...');
        await this.bankEntry.delete({});
        await this.bankEntry.insert(
            seeds.getSeeds().map(seed => {
                const bankEntry = new BankEntry();
                bankEntry.date = new Date(seed.date);
                bankEntry.description = seed.description;
                bankEntry.category = seed.category;
                bankEntry.value = Number(seed.value);
                return bankEntry;
            })
        )
        console.log('Populating BankEntries done!');
    }

}