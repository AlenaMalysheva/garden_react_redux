import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import ProductsByCategory from './pages/ProductsByCategory';
import ProductDescrPage from './pages/ProductDescrPage';
import ProductsPage from './pages/ProductsPage';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='products' element={<ProductsPage />}/>
        <Route path='categories' element={<CategoriesPage />}/>
        <Route path='cart' element={<CartPage />}/>
        <Route path='categories/:category' element={<ProductsByCategory />}/>
        <Route path='categories/:category/products/:id' element={<ProductDescrPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
