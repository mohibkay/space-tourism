import Menu from 'components/menu';
import { Icons } from 'components/utils/Icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-6'>
      <Link href='/'>
        <Icons.logo />
      </Link>
      {/* <Icons.hamburger /> */}
      <Menu />
    </nav>
  );
};

export default Navbar;
