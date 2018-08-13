import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Timesheet, Project } from '../../shared/interfaces';

@Component({
  selector: 'j-projects',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss']
})

export class TimesheetsComponent {

  public project: Project;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {

    this.route.params.subscribe(params => {
       const projectId = params['projectId'];
       projectService
        .getProjectById(projectId)
        .subscribe(project => this.project = project);
    });

  }


  public displayedColumns: string[] = ['from', 'to', 'hours', 'status'];

  public tableDataSource: Timesheet[] = [
    { id: 1,  from: new Date(), to: new Date(), hours: 160, status: 'Received',  createdAt: new Date(), updatedAt: new Date()},
    { id: 2,  from: new Date(), to: new Date(), hours: 160, status: 'Received',  createdAt: new Date(), updatedAt: new Date()},
    { id: 3,  from: new Date(), to: new Date(), hours: 160, status: 'Received',  createdAt: new Date(), updatedAt: new Date()},
    { id: 4,  from: new Date(), to: new Date(), hours: 160, status: 'Received',  createdAt: new Date(), updatedAt: new Date()}
  ]


}
