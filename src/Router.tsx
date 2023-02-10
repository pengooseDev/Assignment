import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Todos from './ToDos';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/:taskId/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
