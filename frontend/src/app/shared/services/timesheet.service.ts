import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorage } from 'ngx-webstorage';
import { Timesheet } from '../interfaces';

@Injectable()
export class TimesheetService {

    private TIMESHEETS_URL = '/api/user/timesheets';
    private TIMESHEET_URL = '/api/user/timesheets/:timesheetId';


    constructor(private http: HttpClient) {}

    public getUserTimesheetByTimesheetId(timesheetId: string): Observable<Timesheet> {
        return this.http.get(this.TIMESHEET_URL.replace(':timesheetId', timesheetId)) as Observable<Timesheet>;
    }

    public createForMonth(monthDate: string, projectId: number): Observable<Timesheet> {
        return this.http.post(this.TIMESHEETS_URL, { monthDate, projectId }) as Observable<Timesheet>;
    }

    public updateTimesheet(timesheet: Timesheet): Observable<Timesheet> {
        return this.http.put(this.TIMESHEET_URL.replace(':timesheetId', timesheet.id.toString()), timesheet) as Observable<Timesheet>;
    }

}
