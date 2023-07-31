'use client';

import Menu from 'components/menu';
import { Icons } from 'components/utils/Icons';
import Link from 'next/link';
import { Button } from 'components/ui/button';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { BREAKPOINTS } from 'lib/utils';

interface Props {
  showSidebar: () => void;
}

const Navbar: React.FC<Props> = ({ showSidebar }) => {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  return (
    <nav className='flex justify-between items-center lg:p-6'>
      <Link href='/' className='py-4 px-6 md:ml-6 lg:mt-6'>
        <Icons.logo />
      </Link>

      {isTablet ? (
        <Menu />
      ) : (
        <Button onClick={showSidebar}>
          <Icons.hamburger />
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
