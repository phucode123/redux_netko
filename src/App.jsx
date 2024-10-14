import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_PRODUCTS_REQUEST } from './action/types'
import { fetchAllProduct } from './action/action'

function App() {

  const couter = useSelector((state) => state.user.listProducts)
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(couter)
  const dispatch = useDispatch();
  console.log(couter);


  function getProducts() {
    dispatch(fetchAllProduct())
    setProducts(couter)
  }

  return (
    <>
      <div>
        <ul>
          {products.map((product, index) => {
            return (
              <li key={product.id}>{product.name} <span style={{cursor: 'pointer', color: 'red'}}> delete</span></li>
            );
          })}
        </ul>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => getProducts()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
