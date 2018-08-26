export interface TimesheetEntry {
  id: number;
  timesheetId: number;
  date: Date;
  checkIn: string;
  checkOut: string;
  pause: number;
  hours: number;
  comments: string;
  createdAt: Date;
  updatedAt: Date;
}
