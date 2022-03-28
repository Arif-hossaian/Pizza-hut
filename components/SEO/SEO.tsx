import React from 'react';
import Head from 'next/head';

const defaultMeta = {
  title: 'Pizza Hut',
  description: 'Online Pizza buying center',
  image:
    'https://res.cloudinary.com/arifscloud/image/upload/v1641448837/pizza-logo_nzjlsv.png',
};

const SEO: React.FC<any> = ({ children, ...customMeta }) => {
  const meta = {
    ...defaultMeta,
    ...customMeta,
  };
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/arifscloud/image/upload/v1641449099/pizza-logo-2-removebg-preview_l7lk0b.png"
      />
    </Head>
  );
};

export default SEO;
