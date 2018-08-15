import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { TimesheetService } from '../../shared/services/timesheet.service';
import { Project, TimesheetEntry } from '../../shared/interfaces';

@Component({
  selector: 'j-projects',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})

export class TimesheetsComponent {

  public project: Project;
  public displayedColumns: string[] = ['date', 'checkIn', 'checkOut', 'hours', 'comments'];
  public tableDataSource: TimesheetEntry[] = [];

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private timesheetService: TimesheetService
  ) {

    this.route.params.subscribe(params => {

       const projectId = params['projectId'];

       projectService
        .getProjectById(projectId)
        .subscribe(project => this.project = project);

    });

  }

  public createOrSeeTimesheet(timesheetId?: string): void {
    if (timesheetId) {
      this.timesheetService
        .getUserTimesheetEntriesByTimesheetId(timesheetId)
        .subscribe(timesheetEntries => this.tableDataSource = timesheetEntries);
    }

  }





}
