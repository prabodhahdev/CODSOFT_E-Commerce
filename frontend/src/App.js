import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCatogory from './Pages/ShopCatogory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men-banner.png'
import women_banner from './Components/Assets/women-banner.png'
import kid_banner from './Components/Assets/kids-banner.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCatogory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCatogory banner={women_banner}category="women"/>}/>
        <Route path='/kids' element={<ShopCatogory banner={kid_banner}category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          
          </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
