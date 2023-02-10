import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { toDoDatasAtom } from '../atom';

const Detail = () => {
  const { taskId } = useParams();
  const toDos = useRecoilValue(toDoDatasAtom);
  const task = Object.entries(toDos)
    .map(([_, board]) => board.filter((task) => task.id === Number(taskId)))
    .flat()[0];

  return (
    <>
      <div>{task.id}</div>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </>
  );
};

export default Detail;
