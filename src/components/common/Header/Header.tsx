import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/imgs/logo.png';
import { Container, Text } from 'src/components/ui';

const MENU = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: 'style-guide',
    name: 'Style guides',
  },
  {
    to: 'under-construction',
    name: 'Under construction',
  },
];

const Header: FC = () => (
  <header className="border-b border-black">
    <Container>
      <div className="flex items-center py-4">
        <div className="flex-1 flex items-center">
          <Link to="/" className="h-12 flex mr-4 border border-black">
            <img src={logo} alt="ALOGO" />
          </Link>
          <ul className="flex gap-4">
            {MENU.map(({ name, to }) => (
              <li key={to}>
                <Link to={to} className="hover:underline underline-offset-4">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Text>Simple framework React/Redux TS </Text>
      </div>
    </Container>
  </header>
);

export default Header;
