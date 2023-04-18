
import Home from './pages/Home/Home'
import UsersList from './pages/Users/UsersList'
import Products from './pages/Products/Products'
import NewUser from './pages/NewUser/NewUser'
import Product from './pages/Products/Product'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <UsersList /> },
    { path: '/products', element: <Products /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/product/:productId', element: <Product /> },
]








export default routes