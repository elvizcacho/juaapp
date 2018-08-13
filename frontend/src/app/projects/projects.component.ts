import { Component } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { Project } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'j-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  public projects: Project[];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {
    projectService
      .getProjects()
      .subscribe((data: Project[]) => this.projects = data);
  }

  public goTo(route: string): void {
    this.router.navigate([route]);
  }

}
