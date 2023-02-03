import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { addToggleAtom } from './atom';

const Overlay = () => {
  const [toggle, setToggle] = useRecoilState(addToggleAtom);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return <Wrapper onClick={toggleHandler} />;
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
