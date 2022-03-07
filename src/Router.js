import React from 'react'; 
import Login from './Login';
import Registration from './Registration';
import CustomerAddress from './CustomerAddress';
import PaymentDetails from './PaymentDetails';
import Invoice_Details from './Invoice_Details';
import { HashRouter, Routes,Route } from 'react-router-dom';



export const Router = () => (
    <HashRouter hashType="slash">
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route  path='/registration' element={<Registration/>} />
      <Route  path='/address' element={<CustomerAddress/>} />
      <Route  path='/payment' element={<PaymentDetails/>} />
      <Route  path='/invoice' element={<Invoice_Details/>} />
      </Routes>
  </HashRouter>
  )
  
  export default Router;