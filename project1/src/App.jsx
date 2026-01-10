import Careers from './components/Careers'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Menubar from './components/Menubar'
import Homepage from './components/Homepage'
import AboutUs from './components/AboutUs'
import ShowProducts from './components/ShowProducts'
import Menubar1 from './components/Menubar'
import SingleProduct from './components/SingleProduct'
const App = () => {
  return (
   <>
    <Router>
      <Menubar/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/prod" element={<ShowProducts />} />
            <Route path="/single/:productid" element={<SingleProduct />} />
        </Routes>
    </Router>
   </>
  )
}

export default App

