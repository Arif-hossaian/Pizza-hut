import Link from 'next/link';
import React from 'react';

const Checkout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link href="/order/1" passHref>
        Order section
      </Link>
    </div>
  );
};

export default Checkout;
