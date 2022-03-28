import type { InferGetStaticPropsType, NextPage } from 'next';
import SEO from '../components/SEO/SEO';
import { ShowProduct } from '../components/Show-Product/ShowProduct';
import BannerSlider from '../components/Slider/BannerSlider';
import axios from 'axios';

export default function Home({
  pizzaList,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <SEO />
      <BannerSlider />
      <main className="mx-auto max-w-screen-xl px-6 sm:px-8">
        <div className="mt-16 space-y-20">
          <ShowProduct pizzaList={pizzaList} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`http://localhost:3000/api/products`);
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
