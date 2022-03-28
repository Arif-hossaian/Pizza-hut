import Image from 'next/image';
import SEO from '../components/SEO/SEO';

export default function Custom404() {
  return (
    <>
      <SEO title="Page not found" />
      <div className="flex min-h-screen justify-center items-center bg-[#4b515f]">
        <Image
          src="https://res.cloudinary.com/arifscloud/image/upload/v1648444342/undraw_Page_not_found_re_e9o6_1_kzgimy.png"
          alt="error"
          layout="fill"
        />
      </div>
    </>
  );
}
