import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { addToggleAtom } from '../atom';

const AddIcon = () => {
  const [toggleState, setToggleState] = useRecoilState(addToggleAtom);
  const toggleHandler = () => {
    setToggleState((prev) => !prev);
  };

  return (
    <Wrapper toggleState={toggleState} onClick={toggleHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
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

export default AddIcon;

interface WrapperProps {
  toggleState: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 50px;
  font-weight: 600;
  color: ${(props) => (props.toggleState ? 'rgba(222, 222, 222, 1)' : '#111')};
  background: ${(props) =>
    props.toggleState ? 'rgba(110, 110, 110, 0)' : 'rgba(110, 110, 110, 1)'};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  :hover {
    background: rgba(200, 200, 200, 1);
    color: #111;
    cursor: pointer;
  }
`;
