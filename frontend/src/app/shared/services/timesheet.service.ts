import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorage } from 'ngx-webstorage';
import { TimesheetEntry } from '../interfaces';

@Injectable()
export class TimesheetService {

    private TIMESHEET_ENTRIES_URL = '/api/user/timesheets/:timesheetId/entries';

    constructor(private http: HttpClient) {}

    public getUserTimesheetEntriesByTimesheetId(timesheetId: string): Observable<TimesheetEntry[]> {
        return this.http.get(this.TIMESHEET_ENTRIES_URL.replace(':timesheetId', timesheetId)) as Observable<TimesheetEntry[]>;
    }

}
