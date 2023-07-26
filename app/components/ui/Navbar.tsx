import { Icons } from 'components/utils/Icons';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-6'>
      <Icons.logo />
      <Icons.hamburger />
    </nav>
  );
};

export default Navbar;
