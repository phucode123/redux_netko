import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import { GET_ALL_PRODUCTS_REQUEST } from './action/types'
import { fetchALlProduct, increment} from './redux/slices/userSlice'


function App() {

  const listUsers = useSelector((state) => state.user.listUsers)
  const dispatch = useDispatch();
  // console.log(couter);
  const count = useSelector((state) => state.user.value)

    useEffect(() => {
      // dispatch(fetchAllProduct())
      dispatch(fetchALlProduct())
    }, [])
  function incrementCount() {
    dispatch(increment())
  }
  return (
    <>
      <div>
        <ul>
          {listUsers.map((user, index) => {
            return (
              <li key={user.id}>{user.name} <span style={{ cursor: 'pointer', color: 'red' }}> delete</span></li>
            );
          })}
        </ul>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => incrementCount()}>
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
