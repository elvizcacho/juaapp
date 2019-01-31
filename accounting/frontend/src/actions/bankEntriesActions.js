import * as types from './actionTypes'
import {BankEntryService} from "../services/api/BankEntryService";

export function receiveBankEntries(bankEntries) {
    return {type: types.RECEIVE_BANK_ENTRIES, bankEntries}
}

export function fetchBankEntries(startDate, endDate) {
    return dispatch => {
        const bankEntryService = new BankEntryService();
        return bankEntryService
            .getBankEntriesByDateRage(startDate, endDate)
            .then(bankEntries => dispatch(receiveBankEntries(bankEntries)))
    }
}

export function selectBankEntryCategory(category, selection) {
    return {type: types.SELECT_BANK_ENTRY_CATEGORY, category, selection}
}

export function unselectBankEntryCategory() {
    return {type: types.UNSELECT_BANK_ENTRY_CATEGORY}
}