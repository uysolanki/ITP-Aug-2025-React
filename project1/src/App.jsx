import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AddProduct1 from './pages/AddProduct1'
import RegisterUser1 from './pages/RegisterUser1'
import ShowProducts1 from './pages/ShowProducts1'
import Menubar from './components/Menubar'
import SingleProduct3 from './pages/SingleProduct3'

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
            <Route path="/single/:productid" element={<SingleProduct3 />} />
        </Routes>
    </Router>
   </>
  )
}

export default App

