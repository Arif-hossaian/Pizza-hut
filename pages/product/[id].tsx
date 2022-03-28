/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import SEO from '../../components/SEO/SEO';
import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartReducer';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Product({
  pizza,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState<any>([]);
  const dispatch = useDispatch();

  const changePrice = (number: any) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex: any) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e: any, option: any) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev: any) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra: any) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <>
      <SEO title={`${pizza.title} || details page`} />
      <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 p-7 mt-20 w-full grid grid-cols-1 gap-y-8 gap-x-14 items-start sm:grid-cols-12 lg:gap-x-14">
        <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5 dark:bg-[#475569]">
          <img
            src={pizza.img}
            alt={pizza.img}
            className="object-center object-cover"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12 dark:text-white">
            {pizza.title}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl text-gray-900 dark:text-red-300">${price}</p>
            <p className="text-md text-gray-900 dark:text-white">
              {pizza.description}
            </p>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            <form>
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm text-gray-900 font-medium dark:text-white">
                    Choose the Size
                  </h4>
                </div>
                <div className="flex flex-row space-x-10 ml-1">
                  <div
                    className="mt-6 w-auto bg-green-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm text-white hover:bg-green-900 "
                    onClick={() => handleSize(0)}
                  >
                    Small
                  </div>
                  <div
                    className="mt-6 w-auto bg-yellow-600 border border-transparent rounded-md py-3 px-5 flex items-center justify-center text-md text-white hover:bg-yellow-900 "
                    onClick={() => handleSize(1)}
                  >
                    Medium
                  </div>
                  <div
                    className="mt-6 w-auto bg-red-600 border border-transparent rounded-md py-4 px-8 flex items-center justify-center text-xl text-white hover:bg-red-900 "
                    onClick={() => handleSize(2)}
                  >
                    Large
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm text-gray-900 font-medium dark:text-white">
                      Choose the Additional Information
                    </h4>
                  </div>
                  {pizza.extraOptions.map((option: any, i: any) => (
                    <div key={i} className="space-x-3 mt-3">
                      <input
                        type="checkbox"
                        id={option.text}
                        name={option.text}
                        onChange={(e) => handleChange(e, option)}
                      />
                      <label htmlFor="double">{option.text}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center space-x-4 mt-8">
                <div>
                  <input
                    onChange={(e: any) => setQuantity(e.target.value)}
                    type="number"
                    placeholder="Enter your item quantity number"
                    defaultValue={1}
                    className="w-16 text-black"
                  />
                </div>
                <div>
                  <Link href="/cart" passHref>
                    <button
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 "
                      onClick={handleClick}
                    >
                      Add to bag
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const res = await axios.get(
    `https://pizza-hut.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
