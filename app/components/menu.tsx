import { Tabs, TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import NavItem from 'components/ui/nav-item';

const MENU = [
  { id: 0, nav: 'home' },
  { id: 1, nav: 'destination' },
  { id: 2, nav: 'crew' },
  { id: 3, nav: 'technology' },
];

const Menu = () => {
  return (
    <ul>
      {MENU.map(({ id, nav }) => (
        <li key={id} className='mb-8'>
          <NavItem title={nav} numeral={id} isMobile />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
