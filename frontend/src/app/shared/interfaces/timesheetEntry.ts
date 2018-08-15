export interface TimesheetEntry {
  id: number;
  timesheetId: number;
  date: Date;
  checkIn: Date;
  checkOut: Date;
  pause: number;
  hours: number;
  comments: string;
  createdAt: Date;
  updatedAt: Date;
}
