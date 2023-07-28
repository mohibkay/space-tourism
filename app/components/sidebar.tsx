'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import NavItem from 'components/ui/nav-item';
import { Icons } from 'components/utils/Icons';
import { Button } from 'components/ui/button';
import { BREAKPOINTS, cn } from 'lib/utils';
import { useMediaQuery } from 'hooks/useMediaQuery';

const MENU = [
  { id: 0, nav: 'home', route: '/' },
  { id: 1, nav: 'destination', route: '/destination' },
  { id: 2, nav: 'crew', route: '/crew' },
  { id: 3, nav: 'technology', route: '/technology' },
];

interface Props {
  hideSidebar: () => void;
  isSidebarVisible: boolean;
}

const Sidebar: React.FC<Props> = ({ hideSidebar, isSidebarVisible }) => {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  if (isTablet) return <></>;
  return (
    <aside
      className={cn(
        'w-[70%] h-[100vh] absolute top-0  text-white transition-all duration-700 bg-white/5 backdrop-blur-2xl',
        isSidebarVisible ? 'right-0' : '-right-full'
      )}
    >
      <Button className='absolute top-8 right-[26px]' onClick={hideSidebar}>
        <Icons.close />
      </Button>

      <ul className='mt-32 ml-8'>
        {MENU.map(({ id, nav, route }) => (
          <li key={id} className='mb-8'>
            <NavItem title={nav} numeral={id} route={route} renderNumeral />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
