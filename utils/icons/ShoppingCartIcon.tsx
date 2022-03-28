import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/cart.module.css';

const ShoppingCartIcon: React.FC = () => {
  return (
    <Link href="/cart" passHref>
      <div className="mt-2 space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ShoppingCartIcon;
