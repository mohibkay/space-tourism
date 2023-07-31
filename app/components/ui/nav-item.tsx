import Link from 'next/link';

interface Props {
  title: string;
  route: string;
  numeral?: number;
  renderNumeral?: boolean;
}

const NavItem: React.FC<Props> = ({
  title,
  route,
  numeral,
  renderNumeral = false,
}) => {
  const paddedNumeral = String(numeral).padStart(2, '0');

  return (
    <Link
      href={route}
      className='text-nav-lg md:max-lg:text-nav-md tracking-wider'
    >
      {renderNumeral && <span className='mr-3 font-bold'>{paddedNumeral}</span>}
      <span className='uppercase'>{title}</span>
    </Link>
  );
};

export default NavItem;
