import Hero from 'components/Hero';
import Navbar from 'components/ui/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-home-mobile bg-cover h-screen'>
      <Navbar />
      <Hero />
    </div>
  );
}
