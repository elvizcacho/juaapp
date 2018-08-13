export interface Timesheet {
  id: number;
  from: Date;
  to: Date;
  hours: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
