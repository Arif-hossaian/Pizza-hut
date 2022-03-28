import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Avatar from 'react-avatar';
import { Button } from '../Button';

const ProfileMenuSection: React.FC = () => {
  const handleLogout = () => {};
  const auth = false;
  return (
    <>
      {auth ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-white dark:rounded-full">
              <Avatar round={true} size="50" src={auth} color="#0260d7" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/" passHref>
                      <button
                        className={`${
                          active ? 'bg-[#0260d7] text-white' : 'text-gray-900'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        My Profile
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#0260d7] text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Archive
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-[#0260d7] text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      Move
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-red-700 text-white' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={handleLogout}
                    >
                      <i className="las la-sign-out-alt mr-5"></i>
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <Link href="/signin" passHref>
          <Button variant="solid" className="hidden md:inline-flex">
            Sign In
          </Button>
        </Link>
      )}
    </>
  );
};

export default ProfileMenuSection;
