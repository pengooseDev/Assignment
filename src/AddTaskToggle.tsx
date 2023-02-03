import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Overlay from './Overlay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addToggleAtom, toDoDatasAtom } from './atom';
import { useRef } from 'react';

const AddTaskToggle = () => {
  const [toDoDatas, setToDoDatas] = useRecoilState(toDoDatasAtom);
  const toggle = useRecoilValue(addToggleAtom);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const title = titleRef.current;
    const description = descriptionRef.current;
    if (!title || !description) return;

    const titleValue = title['value'];
    const descriptionValue = title['value'];

    setToDoDatas((prev) => {
      const oldToDoArr = prev['toDo'];
      const newToDoArr = [
        ...oldToDoArr,
        { title: titleValue, description: descriptionValue },
      ];

      const newToDosData = {
        ...prev,
        toDo: newToDoArr,
      };

      return newToDosData;
    });
  };

  return (
    <AnimatePresence>
      {!toggle && (
        <>
          <Overlay />
          <Wrapper layoutId="addTask">
            <Add onClick={submitHandler}>Add</Add>
            <Form>
              <TitleInput ref={titleRef} />
              <DescriptionInput ref={descriptionRef} />
            </Form>
          </Wrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddTaskToggle;

const Add = styled.div`
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  transition: ease-in-out 0.15s;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

/* Form */
const Wrapper = styled(motion.div)`
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 100px);
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  padding: 15px;
  border-radius: 5px;
`;

const TitleInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Title',
  require,
})`
  border: none;
  outline: none;
  background: white;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

  :focus {
    border: none;
    outline: none;
  }
`;

const DescriptionInput = styled.textarea.attrs({
  cols: 10,
  placeholder: '>',
})`
  border: none;
  outline: none;
  background: white;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  height: calc(100% - 45px);

  :focus {
    border: none;
    outline: none;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-left: 15px;
`;
