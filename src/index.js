import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './pages/Signin/SignIn'
import SignUp from './pages/Signup/SignUp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
    <Route path='/' element={<SignIn></SignIn>}>
    </Route>
    <Route path='/SignUp' element={<SignUp></SignUp>}>
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
