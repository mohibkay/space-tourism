import Link from 'next/link';

interface Props {
  title: string;
  route: string;
  numeral?: number;
  isMobile?: boolean;
}

const NavItem: React.FC<Props> = ({
  title,
  route,
  numeral,
  isMobile = false,
}) => {
  const paddedNumeral = String(numeral).padStart(2, '0');

  return (
    <Link href={route} className='text-nav-lg'>
      {isMobile && <span className='mr-3'>{paddedNumeral}</span>}
      <span className='uppercase'>{title}</span>
    </Link>
  );
};

export default NavItem;
