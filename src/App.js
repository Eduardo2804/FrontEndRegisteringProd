
import { useEffect, useState } from 'react';
import './App.css';
import Form from './form';
import Table from './table';

function App() {

  //Objt product

  const product = {

    id : 0,
    name : "",
    brand : ""



  }

  //useState
  const [btnRegister, setBtnRegister] = useState(true);
  const [products, setProduct] = useState([]);
  const [objProduct, setObjProduct] = useState(product);

  //useEffect responsible to requisit from backend and send to frontend

  useEffect(()=>  {

    fetch("http://localhost:8080/list")
    .then(result => result.json())
    .then(result_changed => setProduct(result_changed));


  }, []);

  //getting information to form

  const enteringData = (e) => {

    setObjProduct({...objProduct, [e.target.name]:e.target.value})
  }


  //register product

  const register = () => {

    fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify(objProduct),
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(result => result.json())
    .then(result_changed => {
      
      if (result_changed.message !== undefined)
      {
        alert(result_changed.message);
      }
      else {
        setProduct([...products, result_changed]);
        alert("Product registered")
        cleaning();
      }
    })
    
  }

  //delete method
  const remove = () => {

    fetch("http://localhost:8080/delete"+objProduct.id, {
      method: "delete",
      headers: {

        "Content-type":"application/json",
        "Accept":"application/json",
      
        
      }
    })
    .then(result => result.json())
    .then(result_changed => {
      
      //alert removing product
      alert(result_changed.message);
      
      //copying the products vector
      let vectorTemp = [...products];

      // index
      let index = vectorTemp.findIndex((p) => {
        return p.id === objProduct.id;

      });

      //deleting prodcut from my vector temp

      vectorTemp.splice(index, 1);

      //refreshing the product vector

      setProduct(vectorTemp);

      //cleaning form
      cleaning();

    })
    
  }

  //cleaning form

  const cleaning = () => {
    setObjProduct(product);
    setBtnRegister(true);
  }

  //selecting product

  const selectProduct = (position) => {
    setObjProduct(products[position]);
    setBtnRegister(false);

  }



  //return
  return (
   
    <div>
      
      <Form button = {btnRegister} eventKeyboard = {enteringData} register = {register} obj = {objProduct} cancel = {cleaning} remover = {remove}/>
      <Table vector = {products} select = {selectProduct}/>
      
    </div>
  );
}

export default App;
