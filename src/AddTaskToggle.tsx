import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Overlay from './Overlay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addToggleAtom, toDoDatasAtom } from './atom';
import { useState } from 'react';

const AddTaskToggle = () => {
  const [toDoDatas, setToDoDatas] = useRecoilState(toDoDatasAtom);
  const toggle = useRecoilValue(addToggleAtom);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setToDoDatas((prev) => {
      const oldToDoArr = prev['toDo'];
      const newToDoArr = [
        ...oldToDoArr,
        { title, description, id: new Date().getTime() },
      ];

      const newToDosData = {
        ...prev,
        toDo: newToDoArr,
      };

      return newToDosData;
    });

    setTitle((prev) => '');
    setDescription((prev) => '');
  };

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (!newValue) return;

    setTitle((prev) => newValue);
  };

  const descriptionChangeHandler = (e: any) => {
    const newValue = e.currentTarget.value;
    if (!newValue) return;

    setDescription((prev) => newValue);
  };

  return (
    <AnimatePresence>
      {!toggle && (
        <>
          <Overlay />
          <Wrapper layoutId="addTask">
            <Add onClick={submitHandler}>Add</Add>
            <Form onSubmit={submitHandler}>
              <TitleInput onChange={titleChangeHandler} value={title} />
              <DescriptionInput
                onChange={descriptionChangeHandler}
                value={description}
              />
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
