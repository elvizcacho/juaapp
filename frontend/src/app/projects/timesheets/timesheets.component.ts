import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { TimesheetService } from '../../shared/services/timesheet.service';
import { Project, Timesheet, TimesheetEntry } from '../../shared/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'j-projects',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})

export class TimesheetsComponent {

  public project: Project;
  public timesheet: Timesheet;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private timesheetService: TimesheetService
  ) {

    this.route.params.subscribe(params => {

       const projectId = params['projectId'];

       projectService
        .getProjectById(Number(projectId))
        .subscribe(project => this.project = project);

    });

  }

  public createTimeSheet(monthDate: string): void {

    this.timesheetService
      .createForMonth(monthDate, this.project.id)
      .subscribe((timesheet: Timesheet) => {
        this.setTimesheet(timesheet);
        this.refreshProject();
      });

  }

  public seeTimesheet(timesheetId?: string): void {

    this.timesheetService
      .getUserTimesheetByTimesheetId(timesheetId)
      .subscribe((timesheet: Timesheet) => {
        this.setTimesheet(timesheet);
      });

  }

  public saveTimesheet(timesheet: Timesheet): void {

    timesheet.entries = timesheet.entries.map(entry => {
      if (entry.checkIn && entry.checkOut && !moment(entry.checkIn).isValid() && !moment(entry.checkOut).isValid()) {
        entry.checkIn = this.turnTimeIntoDate(entry.date, entry.checkIn);
        entry.checkOut = this.turnTimeIntoDate(entry.date, entry.checkOut);
      }
      return entry;
    });

    this.timesheetService
      .updateTimesheet(timesheet)
      .subscribe((timesheet: Timesheet) => {
        this.setTimesheet(timesheet);
      });
  }

  public closeTimesheet(timesheetId: number): void {
    this.timesheetService
      .closeTimesheet(timesheetId)
      .subscribe((timesheet: Timesheet) => {
        this.setTimesheet(timesheet);
      });
  }

  public exportAsPDF(timesheetId: number): void {
    this.timesheetService.exportAsPDF(timesheetId);
  }

  public getInvoiceAsPDF(timesheetId: number): void {
    this.timesheetService.getInvoiceAsPDF(timesheetId);
  }

  private turnTimeIntoDate(referenceDate, time: string): string {
    const date = moment(referenceDate);
    const result = this.getHourAndMinutesAsArray(time);
    date.set({hour: result[0], minute: result[1], second: 0, millisecond: 0});
    return date.toISOString();
  }

  private getHourAndMinutesAsArray(time: string): number[] {
    const regex = /(\d{2}):(\d{2})/gm;
    let m;
    const results = [];

    while ((m = regex.exec(time)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            results.push(match);
        });
    }

    return results.slice(1, results.length);
  }

  private setTimesheet(timesheet: Timesheet): void {

    this.timesheet = timesheet;
    this.timesheet.hours = this.timesheet.entries.reduce((acum, timesheetEntry) => {
      acum += timesheetEntry.hours;
      return acum;
    }, 0);

    if (this.timesheet.status === 'open') {
      this.timesheet.entries = this.timesheet.entries.map(entry => {

        if (!entry.id) {
          return entry;
        }

        const checkIn = moment(entry.checkIn);
        const checkOut = moment(entry.checkOut);

        entry.checkIn = checkIn.format('HH:mm');
        entry.checkOut = checkOut.format('HH:mm');

        return entry;

      });
    }

  }

  private refreshProject(): void {
    this.projectService
     .getProjectById(this.project.id)
     .subscribe(project => this.project = project);
  }





}
