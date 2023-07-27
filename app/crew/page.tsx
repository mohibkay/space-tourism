'use client';

import Hero from 'components/hero';
import Sidebar from 'components/sidebar';
import Navbar from 'components/ui/navbar';
import { useState } from 'react';

export default function Home() {
  const [isSidebarVisible, setIsSideBarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSideBarVisible((prev) => !prev);
  };

  return (
    <div className='bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover h-screen relative'>
      <Navbar showSidebar={toggleSidebar} />
      <Hero />
      <Sidebar
        hideSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
    </div>
  );
}
