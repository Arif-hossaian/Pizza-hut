import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartReducer';
import Link from 'next/link';

const Checkout = () => {
  const cart = useSelector((state: RootStateOrAny) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = 'USD';
  const style: any = { layout: 'vertical' };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data: any) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }: any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions: any) {
            return actions.order.capture().then(function (details: any) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Link href={`/orders/1`} passHref>
        {/* <PayPalScriptProvider
          options={{
            'client-id': 'test',
            components: 'buttons',
            currency: 'USD',
          }}
        >
          <ButtonWrapper currency={currency} showSpinner={false} />
        </PayPalScriptProvider> */}
        order
      </Link>
    </div>
  );
};

export default Checkout;
