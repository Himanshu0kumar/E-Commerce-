import ProductList from './features/product/components/ProductList';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  { 
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  },
  {
    path:"/product-list",
    element: <ProductList></ProductList>
  },
  
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
