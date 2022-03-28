/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import SEO from '../components/SEO/SEO';
import { tableTitle } from '../utils/mocData';
import Link from 'next/link';

const Cart = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart);

  return (
    <>
      <SEO title="Cart Section" description="" />
      {cart.products.length === 0 ? (
        <div className="flex justify-center items-center m-56">
          Nothing select
        </div>
      ) : (
        <div className="container mx-auto p-6 mt-20 font-mono grid md:grid-cols-3 gap-4  justify-center items-center">
          <div className="col-span-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {tableTitle.map((title, i) => (
                      <th key={i} scope="col" className="px-6 py-3">
                        {' '}
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-center">
                  {cart.products.map((product: any, i: any) => (
                    <>
                      <tr
                        key={i}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          <img
                            src={product.img}
                            alt="img"
                            className="w-11 h-11"
                          />
                        </th>
                        <td className="px-6 py-4">{product.title}</td>
                        <td className="px-6 py-4">
                          {product.extras.map((extra: any) => (
                            <span key={extra._id}>{extra.text}, </span>
                          ))}
                        </td>
                        <td className="px-6 py-4">{product.price}</td>
                        <td className="px-6 py-4">{product.quantity}</td>
                        <td className="px-6 py-4">
                          ${product.price * product.quantity}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-10 mx-auto bg-red-200 shadow overflow-hidden sm:rounded-lg dark:bg-red-300 dark:text-black">
            <h2 className="font-bold text-lg">Cart total</h2>
            <div className="py-4">
              <p>Subtotal: {cart.total}$</p>
              <p>Discount: 0.00$</p>
              <p>Total: {cart.total}$</p>
            </div>
            <Link href="/checkout" passHref>
              <Button>CHECKOUT NOW!</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
