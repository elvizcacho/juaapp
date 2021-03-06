import {Component} from '@angular/core';
import {ProjectService} from '../shared/services/project.service';
import {Project} from './interfaces';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CreateProjectModal} from './modals/createProject.modal.component';

@Component({
  selector: 'j-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  public projects: Project[];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.projectService = projectService;
    this.loadProjects();
  }

  public goTo(route: string): void {
    this.router.navigate([route]);
  }

  public openCreateProjectDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectModal, {
      width: '500px',
      data: {name: 'Juan', animal: 'Panter'}
    });
    dialogRef.afterClosed().subscribe(result => this.onDialogClosed(result));
  }

  private loadProjects(): void {
    this.projectService
      .getProjects()
      .subscribe((data: Project[]) => this.projects = data);
  }

  private onDialogClosed(result): void {
    this.loadProjects();
  }

  delete(projectId: number): void {
    this.projectService
      .deleteProjectById(projectId)
      .subscribe(() => this.loadProjects());
  }

}
