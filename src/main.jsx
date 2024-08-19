import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="931788169044-61pnurk32hjv6igc5oeuri3ppeure80o.apps.googleusercontent.com">
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer 
          theme='dark'
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
          <App />
        </AuthContextProvider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
