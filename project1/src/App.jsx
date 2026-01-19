import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddProduct1 from './components/AddProduct1'
import Homepage from './components/Homepage'
import Menubar from './components/Menubar'
import RegisterUser1 from './components/RegisterUser1'
import ShowProducts1 from './components/ShowProducts1'
import SingleProduct2 from './components/SingleProduct2'
const App = () => {
  return (
   <>
    <Router>
      <Menubar/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddProduct1 />} />
            <Route path="/register" element={<RegisterUser1 />} />
            <Route path="/prod" element={<ShowProducts1 />} />
            <Route path="/single/:productid" element={<SingleProduct2 />} />
        </Routes>
    </Router>
   </>
  )
}

export default App

