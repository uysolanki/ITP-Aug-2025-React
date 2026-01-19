import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Careers from './components/Careers'
import Homepage from './components/Homepage'
import Menubar from './components/Menubar'
import ShowProducts1 from './components/ShowProducts1'
import SingleProduct2 from './components/SingleProduct2'
import AddProduct1 from './components/AddProduct1'
import RegisterUser from './components/RegisterUser'
const App = () => {
  return (
   <>
    <Router>
      <Menubar/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddProduct1 />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/prod" element={<ShowProducts1 />} />
            <Route path="/single/:productid" element={<SingleProduct2 />} />
        </Routes>
    </Router>
   </>
  )
}

export default App

