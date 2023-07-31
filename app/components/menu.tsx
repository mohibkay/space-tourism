'use client';
import { usePathname } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import NavItem from 'components/ui/nav-item';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { BREAKPOINTS, cn } from 'lib/utils';

const MENU = [
  { id: 0, nav: 'home', route: '/' },
  { id: 1, nav: 'destination', route: '/destination' },
  { id: 2, nav: 'crew', route: '/crew' },
  { id: 3, nav: 'technology', route: '/technology' },
];

const Menu = () => {
  const pathname = usePathname();
  console.log('🐬 ~ file: Menu.tsx:17 ~ Menu ~ pathname:', pathname);
  const isDeskTop = useMediaQuery(BREAKPOINTS.desktop);

  return (
    <>
      <div className=''></div>
      <ul className='flex items-center text-white bg-white/4 lg:backdrop-blur-2xl'>
        {MENU.map(({ id, nav, route }) => (
          <li
            key={id}
            className={cn('p-6', pathname === route && 'border-b-2')}
          >
            <NavItem
              title={nav}
              route={route}
              numeral={id}
              renderNumeral={isDeskTop}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
