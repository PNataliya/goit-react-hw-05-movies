import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route parh="/" element={<Layout />}></Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

console.log(Layout);
