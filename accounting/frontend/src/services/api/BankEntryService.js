import axios from "axios";

export class BankEntryService {

    static endPoint = '/api/accounting/entries'

    getBankEntriesByDateRage = (startDate, endDate) => {
        return axios
            .get(BankEntryService.endPoint, {
                params: {
                    startDate,
                    endDate
                }
            })
            .then(response => response.data)
    }

}