import { motion } from 'framer-motion';
import styled from 'styled-components';
import { addToggleAtom } from './atom';
import { useRecoilState } from 'recoil';

const AddTask = () => {
  const [toggle, setToggle] = useRecoilState(addToggleAtom);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrapper onClick={toggleHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-6 h-6"
        width={25}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </Wrapper>
  );
};

export default AddTask;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: ease-in-out 0.1s;
  box-shadow: 0px 0px 5px rgba(111, 111, 111, 0.5);

  :hover {
    scale: 1.015;
    opacity: 1;
    cursor: pointer;
  }
`;
