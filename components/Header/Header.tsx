/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Button, IconButton } from '../Button';
import { SwitchToDarkMode } from '../SwitchToDarkMode/SwitchToDarkMode';
import ProfileMenuSection from './ProfileMenuSection';
import ShoppingCartIcon from '../../utils/icons/ShoppingCartIcon';
import styles from '../../styles/cart.module.css';
import Image from 'next/image';
//import Logo from './Logo';

export const Header: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const quantity = useSelector((state: RootStateOrAny) => state.cart.quantity);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-4 px-4 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8 dark:border-b border-slate-200">
        <MenuPopOver
          className="grow-0 basis-1/3"
          display="md:hidden"
          setShowAuth={setShowAuth}
        />
        <div className="flex shrink-0 grow-0 basis-1/3 justify-center md:justify-start">
          <Link href="/" passHref>
            <img
              src="https://res.cloudinary.com/arifscloud/image/upload/v1641449099/pizza-logo-2-removebg-preview_l7lk0b.png"
              alt="img"
              className="w-24 h-16 rounded-md cursor-pointer"
            />
          </Link>

          <div className="hidden gap-2 mt-2 md:ml-2 md:flex">
            <Button variant="ghost" as="a">
              Companies
            </Button>

            <Button variant="ghost" as="a">
              jobs
            </Button>
          </div>
        </div>
        <div className="relative flex basis-1/3 justify-end gap-4">
          <ProfileMenuSection />

          <div className="relative space-x-1">
            <ShoppingCartIcon />
            <div className={styles.counter}>{quantity}</div>
          </div>

          <SwitchToDarkMode />
        </div>
      </header>
    </>
  );
};

const MenuPopOver = ({ className, display, setShowAuth }: any) => {
  let [isOpen, setIsOpen] = useState(false);
  const isLogged = false;
  const userDetails = false;
  const handleLogout = () => {
    console.log('handleLogout');
  };

  return (
    <div className={clsx(className, display)}>
      <IconButton
        variant="ghost"
        aria-label="Navigation Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </IconButton>
      <Transition
        show={isOpen}
        appear
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-300 delay-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx('fixed inset-0 z-50 ', display)}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 delay-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/20 dark:bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-gray-800 ">
            <a className="mx-auto mt-4 flex w-[140px]">logo</a>
            <ul className="mt-8 space-y-3">
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100" />

                <a className="w-full font-medium transition-all group-hover:pl-3">
                  Companies
                </a>
              </li>
              <li className="group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50">
                <span className="absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100" />

                <a className="w-full font-medium transition-all group-hover:pl-3">
                  Jobs
                </a>
              </li>
            </ul>

            <ul className="mt-8 space-y-3 border-t border-gray-200 dark:border-gray-200/10">
              <li>
                <Button variant="solid" fullWidth>
                  Sign In
                </Button>
              </li>
            </ul>
            <IconButton
              variant="ghost"
              aria-label="Close Navigation Menu"
              className="absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            >
              <svg
                viewBox="0 0 10 10"
                className="h-2.5 w-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
