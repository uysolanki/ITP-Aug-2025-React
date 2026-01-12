import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Careers from './components/Careers'
import Homepage from './components/Homepage'
import Menubar from './components/Menubar'
import ShowProducts1 from './components/ShowProducts1'
import SingleProduct from './components/SingleProduct'
import SingleProduct1 from './components/SingleProduct1'
const App = () => {
  return (
   <>
    <Router>
      <Menubar/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/prod" element={<ShowProducts1 />} />
            <Route path="/single/:productid" element={<SingleProduct1 />} />
        </Routes>
    </Router>
   </>
  )
}

export default App

