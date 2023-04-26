import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_xx from './pages/HomePage_xx';
import BlogsStaticPage_xx from './pages/BlogsStaticPage_xx';
import BlogsLocalJsonPage_xx from './pages/BlogsLocalJsonPage_34';
import BlogsNodeServerPage_xx from './pages/BlogsNodeServerPage_xx';
import BlogsSupabasePage_xx from './pages/BlogsSupabasePage_xx';

import ProductsStaticPage_xx from './pages/midprep_xx/ProductsStaticPage_34';

import ProductsNodeServerPage_xx from './pages/midprep_xx/ProductsNodeServerPage_34';

import ProductsNodeServerContextPage_xx from './pages/midprep_xx/ProductsNodeServerContextPage_34';

import MenuStaticPage_34 from './pages/mid_34/MenuStaticPage_34';

import MenuLocalJsonPage_34 from './pages/mid_34/MenuLocalJsonPage_34';

import MenuNodeServerPage_34 from './pages/mid_34/MenuNodeServerPage_34';

import MenuNodeServerContextPage_34 from './pages/mid_34/MenuNodeServerContextPage_34';

import Navbar from './components/NavbarMegaResp2_34';

function App_xx() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/card_xx' element={<BlogsStaticPage_xx />} />
        <Route path='/local_xx' element={<BlogsLocalJsonPage_xx />} />
        <Route path='/node_xx' element={<BlogsNodeServerPage_xx />} />
        <Route path='/supabase_xx' element={<BlogsSupabasePage_xx />} />
        <Route path='/midp_static_xx' element={<ProductsStaticPage_xx />} />
        <Route path='/midp_node_xx' element={<ProductsNodeServerPage_xx />} />
        <Route
          path='/midp_node_context_xx'
          element={<ProductsNodeServerContextPage_xx />}
        />
        <Route path='/mid_static_34' element={<MenuStaticPage_34 />} />
        <Route
          path='/mid_localjson_34'
          element={<MenuLocalJsonPage_34 />}
        />
        <Route
          path='/MenuNodeServerPage_34'
          element={<MenuNodeServerPage_34 />}
        />
        <Route
          path='/MenuNodeServerContextPage_34'
          element={<MenuNodeServerContextPage_34 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App_xx;
