export interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  hourlyRate: string;
  ClientId: number;
  contactEmail: string;
  address: string;
  description: string;
  paymentMonthDay: string;
  createdAt: Date;
  updatedAt: Date;
}
