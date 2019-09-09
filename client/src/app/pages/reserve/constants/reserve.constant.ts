import { GenericItem } from '../../../core/models/generic-item-model';

export const dptos:GenericItem[] = [
  {id: 1, color: '#000000', bgColor: '#F4442E', name: 'Fondo'},
  {id: 2, color: '#000000', bgColor: '#16C172', name: 'Frente'}
];

export const dptosDesc = {
  1: dptos[0],
  2: dptos[1]
};

export const paymentMethods:GenericItem[] = [
  {id: 1, color: '#7161EF', bgColor: '#7161EF', name: 'Efectivo'},
  {id: 2, color: '#957FEF', bgColor: '#957FEF', name: 'Tarjeta'},
  {id: 3, color: '#B79CED', bgColor: '#B79CED', name: 'Transferencia'},
  {id: 4, color: '#DEC0F1', bgColor: '#DEC0F1', name: 'MercadoPago'},
  {id: 5, color: '#EFD9CE', bgColor: '#EFD9CE', name: 'Mixto'}
];

export const paymentMethodsDesc = {
  1: paymentMethods[0],
  2: paymentMethods[1],
  3: paymentMethods[2],
  4: paymentMethods[3],
  5: paymentMethods[4]
};

export const reservationFrom:GenericItem[] = [
  {id: 1, color: '#7B1E7A', bgColor: '#7B1E7A', name: 'Airbnb'},
  {id: 2, color: '#0C0A3E', bgColor: '#0C0A3E', name: 'Booking'},
  {id: 3, color: '#DB995A', bgColor: '#DB995A', name: 'Despegar'},
  {id: 4, color: '#33658A', bgColor: '#33658A', name: 'Facebook'},
  {id: 5, color: '#7B1E7A', bgColor: '#7B1E7A', name: 'Instagram'},
  {id: 6, color: '#F3B3A6', bgColor: '#F3B3A6', name: 'Boca en boca'},
  {id: 7, color: '#F3A712', bgColor: '#F3A712', name: 'Otro'}
];

export const reservationFromDesc = {
 1: reservationFrom[0],
 2: reservationFrom[1],
 3: reservationFrom[2],
 4: reservationFrom[3],
 5: reservationFrom[4],
 6: reservationFrom[5],
 7: reservationFrom[6]
};

export const reservationStatus:GenericItem[] = [
  {id: 1, color: '', bgColor: '', name: 'Nueva'},
  {id: 2, color: '', bgColor: '', name: 'Actualizada'},
  {id: 3, color: '', bgColor: '', name: 'Cancelada'}
];