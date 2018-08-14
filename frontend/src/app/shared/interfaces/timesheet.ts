export interface Timesheet {
  id: number;
  checkIn: Date;
  checkOut: Date;
  hours: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
