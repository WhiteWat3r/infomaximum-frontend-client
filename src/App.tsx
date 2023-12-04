import { FC, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { MainWrapper } from './components/MainWrapper/MainWrapper';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { useAppDispatch } from './services/store';
import { fetchData } from './utils/api';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/catalog" />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </MainWrapper>
    </>
  );
};

export default App;
