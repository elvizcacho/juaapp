import initialState from './initialState'
import {FETCH_BANK_ENTRIES, RECEIVE_BANK_ENTRIES} from "../actions/actionTypes"
import moment from "moment";

export default function bankEntries(state = initialState, action) {
    let newState;
    switch (action.type) {
        case FETCH_BANK_ENTRIES:
            console.log('FETCH_BANK_ENTRIES')
            return action
        case RECEIVE_BANK_ENTRIES:
            newState = {
                bankEntries: action.bankEntries,
                bankEntriesTitle: moment(action.bankEntries[0].date).format('MMMM')
            }
            console.log('RECEIVE_BANK_ENTRIES')
            return newState
        default:
            return state
    }
}