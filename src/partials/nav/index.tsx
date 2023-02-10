import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Home from './Home';
import { useMatch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Nav = () => {
  const isHome = !!useMatch('/');

  return (
    <Wrapper>
      <ThemeToggle />
      <AnimatePresence>{!isHome && <Home />}</AnimatePresence>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 0;
  padding: 10px;
  background: rgba(122, 122, 122, 0.2);
  border-radius: 5px;
  backdrop-filter: 3px;
  gap: 10px;
`;
