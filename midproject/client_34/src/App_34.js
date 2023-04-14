import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_xx from './pages/HomePage_xx';
import BlogsStaticPage_xx from './pages/BlogsStaticPage_xx';
import BlogsLocalJsonPage_xx from './pages/BlogsLocalJsonPage_xx';
import BlogsNodeServerPage_xx from './pages/BlogsNodeServerPage_xx';
import BlogsSupabasePage_xx from './pages/BlogsSupabasePage_xx';
import ProductsStaticPage_34 from './pages/midprep_34/ProductsStaticPage_34';
import ProductsNodeServerPage_34 from './pages/midprep_34/ProductsNodeServerPage_34';
import ProductsNodeServerContextPage_34 from './pages/midprep_34/ProductsNodeServerContextPage_34';
import MidProjectNodeServerContextPage_34 from './pages/middle_project/MidProject_Server34';
import MidProjectSupabaseContextPage_34 from './pages/middle_project/MiddleProject_Supabase34';



import Navbar from './components/NavbarMegaResp_xx';

function App_xx() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/card_xx' element={<BlogsStaticPage_xx />} />
        <Route path='/local_xx' element={<BlogsLocalJsonPage_xx />} />
        <Route path='/node_xx' element={<BlogsNodeServerPage_xx />} />
        <Route path='/supabase_xx' element={<BlogsSupabasePage_xx />} />
        <Route path='/midp_static_34' element={<ProductsStaticPage_34 />} />
        <Route path='/midp_node_34' element={<ProductsNodeServerPage_34 />} />
        <Route path='/midp_node_context_34' element={<ProductsNodeServerContextPage_34 />} />
        <Route path='/mid_project_server_34' element={<MidProjectNodeServerContextPage_34 />} />
        <Route path='/mid_project_supabase_34' element={<MidProjectSupabaseContextPage_34 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_xx;
