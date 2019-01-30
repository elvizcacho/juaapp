import initialState from './initialState'
import {FETCH_BANK_ENTRIES, RECEIVE_BANK_ENTRIES} from "../actions/actionTypes"
import moment from "moment";
import {bankEntriesToPieData} from '../services/charts/bankEntriesChartTransformer'

export default function bankEntries(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_BANK_ENTRIES:
            return action
        case RECEIVE_BANK_ENTRIES:
            newState = {...state,
                bankEntries: action.bankEntries,
                bankEntriesTitle: moment(action.bankEntries[0].date).format('MMMM'),
                bankEntriesChartData: bankEntriesToPieData(action.bankEntries)
            }
            return newState
        default:
            return state
    }
}