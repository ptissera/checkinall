export class CreateReserveDto {
  startDate: Date;
  totalDays: number;
  totalPerson: number;
  dptoId: number;
  reservationMethod: number;
  paymentMethod: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pricePerDay: number;
  observations: string;
  status: number;
}