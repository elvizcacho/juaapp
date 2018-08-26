import { TimesheetEntry } from './timesheetEntry';

export interface Timesheet {
  id: number;
  ProjectId: number;
  from: Date;
  to: Date;
  hours: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  entries: TimesheetEntry[];
}
