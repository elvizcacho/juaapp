export interface Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  hourlyRate: string;
  ClientId: number;
  contactEmail: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  description: string;
  paymentMonthDay: number;
}
