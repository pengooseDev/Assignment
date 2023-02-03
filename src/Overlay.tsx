import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { addToggleAtom } from './atom';

const Overlay = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useRecoilState(addToggleAtom);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrapper
      variants={overlayVariants}
      initial="from"
      animate="to"
      exit="exit"
      onClick={toggleHandler}
    >
      {children}
    </Wrapper>
  );
};

export default Overlay;

const Wrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const overlayVariants = {
  from: {
    opacity: 0,
  },

  to: {
    opacity: 1,
    transition: { duration: 0.15 },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};
