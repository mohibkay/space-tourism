import Menu from 'components/menu';
import { Icons } from 'components/utils/Icons';
import Link from 'next/link';
import { Button } from 'components/ui/button';

interface Props {
  showSidebar: () => void;
}

const Navbar: React.FC<Props> = ({ showSidebar }) => {
  return (
    <nav className='flex justify-between items-center p-6'>
      <Link href='/'>
        <Icons.logo />
      </Link>

      <Button onClick={showSidebar}>
        <Icons.hamburger />
      </Button>
    </nav>
  );
};

export default Navbar;
