import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { LocalStorage } from 'ngx-webstorage';
import { Timesheet } from '../../projects/interfaces';

@Injectable()
export class TimesheetService {

    private TIMESHEETS_URL = '/api/user/timesheets';
    private TIMESHEET_URL = '/api/user/timesheets/:timesheetId';
    private INVOICES_URL = '/api/user/invoices';


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

    public closeTimesheet(timesheetId: number): Observable<Timesheet> {
        return this.http.put(this.TIMESHEET_URL.replace(':timesheetId', timesheetId.toString()) + '/close', {}) as Observable<Timesheet>;
    }

    public exportAsPDF(timesheetId: number): any {
        return this.http
                    .post(this.TIMESHEET_URL.replace(':timesheetId', timesheetId.toString()) + '/pdf', {}, {
                      headers: new HttpHeaders({
                        'Content-Type': 'application/octet-stream',
                      }),
                      responseType: 'blob',
                      observe: 'body'
                    })
                    .subscribe(data => this.downloadFile(data));
    }

    public getInvoiceAsPDF(timesheetId: number): any {
        return this.http
                    .post(this.INVOICES_URL + '/pdf', {timesheetId}, {
                      headers: new HttpHeaders({
                        'Content-Type': 'application/octet-stream',
                      }),
                      responseType: 'blob',
                      observe: 'body'
                    })
                    .subscribe(data => this.downloadFile(data));
    }

    private downloadFile(data) {
      var url = window.URL.createObjectURL(data);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = 'out.pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }

}
