import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/productList/productList';
import Order from './components/order/order';
import Form from './components/form/from';

export const userContext = React.createContext<any>(null)


function App() {

  const [order, setOrder] = useState([])

  return (
    <>
      <userContext.Provider value={{order, setOrder}}>
        <Routes>
          <Route path={'/'} element={<ProductList />}/>
          <Route path={'order'} element={<Order />}/>
          <Route path={'/form'} element={<Form/>} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
