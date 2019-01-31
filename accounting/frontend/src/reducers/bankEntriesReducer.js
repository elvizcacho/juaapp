import initialState from './initialState'
import {
    FETCH_BANK_ENTRIES,
    RECEIVE_BANK_ENTRIES,
    SELECT_BANK_ENTRY_CATEGORY,
    UNSELECT_BANK_ENTRY_CATEGORY
} from "../actions/actionTypes"
import moment from "moment";
import {bankEntriesToPieData} from '../services/charts/bankEntriesChartTransformer'

export default function bankEntries(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_BANK_ENTRIES:
            return action
        case RECEIVE_BANK_ENTRIES:
            newState = {
                ...state,
                bankEntries: action.bankEntries,
                bankEntriesTitle: moment(action.bankEntries[0].date).format('MMMM'),
                bankEntriesChartData: bankEntriesToPieData(action.bankEntries)
            }
            return newState
        case SELECT_BANK_ENTRY_CATEGORY:
            const { bankEntries } = state
            const newBankEntries = bankEntries.map(bankEntry => {
                bankEntry.selected = bankEntry.category === action.category
                return bankEntry
            })
            newState = {
                ...state,
                bankEntries: newBankEntries,
                bankEntriesSelectedRow: action.selection
            }
            return newState
        case UNSELECT_BANK_ENTRY_CATEGORY: {
            newState = {
                ...state,
                bankEntries: state.bankEntries.map(bankEntry => {
                    bankEntry.selected = false;
                    return bankEntry
                }),
                bankEntriesSelectedRow: {}
            }
            return newState
        }
        default:
            return state
    }
}