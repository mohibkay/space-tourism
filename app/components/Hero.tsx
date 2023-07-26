import Link from 'next/link';

const Hero = () => {
  return (
    <div className='text-white flex flex-col justify-around items-center lg:flex-row h-[calc(100vh-96px)]'>
      <div className='text-center px-6'>
        <h1>
          <span className='text-h5-sm md:text-h5-md lg:text-h5-lg'>
            SO, YOU WANT TO TRAVEL TO
          </span>
          <br />
          <span className='text-h1-sm md:text-h1-md font-bellefair'>SPACE</span>
        </h1>

        <p className='text-body-sm md:text-body-md lg:text-body-lg lg:max-w-[444px] font-barlow'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <Link
        href='/destination'
        className='bg-white text-primary-dark text-xl md:text-[32px] tracking-[2px] uppercase w-[150px] md:w-[242px] lg:w-[274px] h-[150px] md:h-[242px] lg:h-[274px] rounded-full hover:ring-[88px] ring-white/10 grid place-content-center'
      >
        explore
      </Link>
    </div>
  );
};

export default Hero;
