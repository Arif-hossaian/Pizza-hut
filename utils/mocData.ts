import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect } from 'react';

export const slides = [
  {
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641446726/pizza-banner1_thyoag.jpg',
    href: '/',
  },
  {
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641446726/pizza-banner2_reuw92.jpg',
    href: '/',
  },
  {
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1648391019/banner_nbkmfh.jpg',
    href: '/',
  },
  {
    image:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641446727/pizza-banner3_sitpv8.jpg',
    href: '/',
  },
];

//table data

export const tableTitle = [
  'Product',
  'Name',
  'Extras',
  'Price',
  'Quantity',
  'Total',
];
export const orderTableTitle = ['Order ID', 'Customer', 'Address', 'Total'];

export const tableInfoData = [
  {
    id: '01',
    productImage:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
    productName: 'Pizza1',
    extras: 'double ingradient, special sauce',
    price: '20$',
    quantity: '2',
    total: '100$',
  },
  {
    id: '02',
    productImage:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
    productName: 'Pizza2',
    extras: 'double ingradient, special sauce',
    price: '20$',
    quantity: '2',
    total: '100$',
  },
  {
    id: '03',
    productImage:
      'https://res.cloudinary.com/arifscloud/image/upload/v1641451588/pizza_r6uuue.png',
    productName: 'Pizza3',
    extras: 'double ingradient, special sauce',
    price: '20$',
    quantity: '2',
    total: '100$',
  },
];

export const orderInfoData = [
  {
    orderId: '01',
    customerName: 'XYZ',
    address: 'Narayangonj',
    total: '100$',
  },
  {
    orderId: '02',
    customerName: 'XYZ',
    address: 'Narayangonj',
    total: '100$',
  },
  {
    orderId: '03',
    customerName: 'XYZ',
    address: 'Narayangonj',
    total: '100$',
  },
];
