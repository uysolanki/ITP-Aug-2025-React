import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  
import UserContextProvider from './contexts/UserContextProvider.jsx';
import ProductContextProvider from './contexts/ProductContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <ProductContextProvider>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </ProductContextProvider>
  </>,
)
