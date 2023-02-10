import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Detail from './components/Detail';
import Todos from './ToDos';
import Nav from './partials/nav';
import GlobalStyle from './utils/styles/globalStyle';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/:taskId/*" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
